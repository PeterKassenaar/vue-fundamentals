<template>
  <div>
    <nn-poe-generic-income
      :input-valid="!this.$v.form.$invalid"
      :title="title"
      :existing-data="existingData"
      @close="close"
      @save="save"
      @update="updateDescription"
    >
      <section slot="introText">{{ $t('incomeAnnuity.intro') }}</section>

      <section slot="extraInput">
        <p>
          {{ $t('incomeAnnuity.iReceive') }}
          <nn-poe-tooltip-wrapper>
            <span slot="trigger" class="nn-poe-picto-info">i</span>
            <section slot="content">
              <p class="header">{{ $t('incomeAnnuity.toolTipHeader') }}</p>
              <p v-html="$t('incomeAnnuity.toolTip')" />
            </section>
          </nn-poe-tooltip-wrapper>
        </p>
        <nn-poe-input
          prefix="€"
          small
          type="number"
          v-model.trim="form.amount"
          :error="$v.form.amount.$dirty && $v.form.amount.$invalid && $t('error.positiveInteger') || ''"
          @input="updateNewAmount"
          @blur="$v.form.amount.$touch()"
          data-testid="annuity-amount-input"
        />
        <nn-poe-select
          small
          v-model="form.isGross"
          :items="taxChoices"
          @input="onChangeIsGross"
          data-testid="annuity-grossnet-select"
        />
        <nn-poe-select
          small
          v-model="form.specifiedFrequency"
          :items="frequencyChoices"
          @input="onChangeFrequency"
          data-testid="annuity-frequency-select"
        />
      </section>
      <section slot="potentialIncome" class="nn-poe-potential-income" v-if="form.specifiedFrequency != frequency.YEARLY">
        <p v-if="newAmount.isCalculated" class="result">{{ newAmount.value }}</p>
        <nn-spinner v-else />
      </section>
    </nn-poe-generic-income>
  </div>
</template>

<script>
import { required, integer, minValue } from 'vuelidate/lib/validators';
import { formattingService } from '../../services';
import { incomeTypes, frequency } from '../../constants';
import GenericIncome from './shared_generic.vue';
import Input from '../../components/input/input.vue';
import Select from '../../components/select/select.vue';
import TooltipWrapper from '../../components/tooltip-wrapper/tooltip-wrapper.vue';

export default {
  name: 'nn-poe-income-annuity',
  computed: {
    isInputValid() {
      return !this.$v.form.$invalid;
    },
    title() {
      const title = this.existingData.annuity
        ? this.$i18n.t('incomeAnnuity.titleEdit')
        : this.$i18n.t('incomeAnnuity.titleAdd');
      return title;
    },
  },
  data() {
    return {
      form: {
        ...this.initializeFormData(this.existingData),
      },
      availableYears: Array(70)
        .fill()
        .map((item, index) => ({ value: index + 55 })),
      availableMonths: Array(12)
        .fill()
        .map((item, index) => ({ value: index })),
      newAmount: {
        isCalculated: false,
        value: '',
      },
      taxChoices: [
        { text: this.$i18n.t('generic.gross'), value: true },
        { text: this.$i18n.t('generic.net'), value: false },
      ],
      frequencyChoices: [
        { text: this.$i18n.t('generic.perYear'), value: frequency.YEARLY },
        { text: this.$i18n.t('generic.perMonth'), value: frequency.MONTHLY },
      ],
      frequency,
    };
  },
  validations: {
    form: {
      description: {
        required,
      },
      amount: {
        integer,
        minValue: minValue(1),
        required,
      },
    },
  },
  created() {
    this.updateNewAmount();
  },
  props: {
    existingData: {
      type: Object,
      default() {
        return {
          description: this.$i18n.t('incomeAnnuity.defaultDescription'),
        };
      },
    },
  },
  methods: {
    updateDescription(value) {
      this.form.description = value;
    },
    async save(genericData) {
      const payload = {
        id: this.form.id,
        incomeData: this.constructDataToSend(genericData, this.form),
      };
      await this.$store.dispatch('futureIncome/send', payload);
      this.$store.dispatch('futureIncome/get');
      this.$parent.close();
    },
    constructDataToSend(genericData, form) {
      const { specifiedFrequency, isGross, amount } = form;
      return {
        ...genericData,
        dataType: incomeTypes.annuity.dataType,
        isGross,
        annuity: {
          yearlyAmount: amount * (specifiedFrequency === frequency.MONTHLY ? 12 : 1),
          specifiedFrequency,
        },
      };
    },
    close() {
      this.$parent.close();
    },
    initializeFormData(existingData) {
      const mergedData = {
        ...existingData,
        ...existingData.annuity,
      };
      return {
        isGross: false,
        specifiedFrequency: frequency.YEARLY,
        amount: mergedData.yearlyAmount
          ? Math.round(mergedData.yearlyAmount / (mergedData.specifiedFrequency === frequency.MONTHLY ? 12 : 1))
          : '',
        ...mergedData,
      };
    },
    onChangeIsGross(value) {
      this.form.isGross = value;
      this.updateNewAmount();
    },
    onChangeFrequency(value) {
      this.form.specifiedFrequency = value;
      this.updateNewAmount();
    },
    updateNewAmount() {
      this.newAmount.isCalculated = false;
      const { specifiedFrequency, amount, isGross } = this.form;
      const newAmount = specifiedFrequency === frequency.MONTHLY ? amount * 12 : amount;
      if (!Number.isNaN(newAmount)) {
        const text = isGross ? 'incomeAnnuity.resultingGrossPerYear' : 'incomeAnnuity.resultingNetPerYear';
        this.newAmount.value = this.$i18n.t(text, {
          value: formattingService.formatAmount(newAmount),
        });
      }
      this.newAmount.isCalculated = true;
    },
  },
  components: {
    [Input.name]: Input,
    [GenericIncome.name]: GenericIncome,
    [Select.name]: Select,
    [TooltipWrapper.name]: TooltipWrapper,
  },
};
</script>

<style lang="scss" scoped src="./shared_dialog.scss"/>
