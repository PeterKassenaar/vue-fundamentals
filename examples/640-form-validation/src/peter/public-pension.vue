<template>
  <div>
    <nn-poe-heading variant="h2" color="medium" :text="$t('incomePublicPension.title')" />
    <form @submit.prevent="save">
      <section>
        <p>{{ $t('incomePublicPension.dob') }}</p>
        <nn-poe-select
          :value="birthDate.day"
          :items="availableDays"
          tiny
          disabled
        />
        <nn-poe-select
          :value="birthDate.month"
          :items="availableMonths"
          tiny
          disabled
        />
        <nn-poe-select
          :value="birthDate.year"
          :items="availableYears"
          small
          disabled
        />
      </section>
      <section>
        <p>
          {{ $t('incomePublicPension.yearsAbroad') }}
          <nn-poe-tooltip-wrapper>
            <span slot="trigger" class="nn-poe-picto-info">i</span>
            <section slot="content">
              <p class="header">{{ $t('incomePublicPension.yearsAbroad') }}</p>
              <p v-html="$t('incomePublicPension.toolTip')" />
            </section>
          </nn-poe-tooltip-wrapper>
        </p>

        <nn-poe-input
          small
          v-model.number="form.yearsAbroad"
          type="number"
          :error="errorText"
          data-testid="input-years-abroad"
        />
      </section>
      <section class="nn-poe-potential-income" v-if="errorText === ''">
        <p v-if="newPublicPension.isCalculated" class="result" data-testid="result">
          {{ $t('incomePublicPension.resultingGrossPerYear', {value: newPublicPension.value}) }}
        </p>
        <nn-spinner v-else />
      </section>
      <nn-poe-bottom-buttons
        button-mode="save"
        :input-valid="errorText === ''"
        @close="close"
        @save="save"
      />
    </form>
  </div>
</template>

<script>
import { between } from 'vuelidate/lib/validators';
import { debounce } from 'lodash';
import { mapState, mapActions } from 'vuex';
import { yearsAbroadLimits, weathers, situations } from '../../constants';
import { formattingService } from '../../services';
import { isInteger } from '../../services/formatting/validators';
import BottomButtons from './shared_bottom-buttons.vue';
import Heading from '../../components/heading/heading.vue';
import Input from '../../components/input/input.vue';
import Select from '../../components/select/select.vue';
import TooltipWrapper from '../../components/tooltip-wrapper/tooltip-wrapper.vue';
import { defaultScenarioId } from '../../store/modules/calculations';

export default {
  name: 'nn-poe-income-aow',
  data() {
    const currentYear = new Date().getFullYear();
    return {
      form: {
        yearsAbroad: undefined,
      },
      availableDays: Array(31)
        .fill()
        .map((item, index) => ({
          value: (index + 1).toString(),
        })),
      availableMonths: Array(12)
        .fill()
        .map((item, index) => ({
          value: (index + 1).toString(),
        })),
      availableYears: Array(105)
        .fill()
        .map((item, index) => ({ value: (index + currentYear - 120).toString() })),
      newPublicPension: {
        isCalculated: false,
        value: '0',
      },
    };
  },
  validations: {
    form: {
      yearsAbroad: {
        between: between(yearsAbroadLimits.min, yearsAbroadLimits.max),
        isInteger,
      },
    },
  },
  async created() {
    this.form.yearsAbroad = this.savedYearsAbroad;
    await Promise.all([this.updatePublicPensionAmount(this.savedYearsAbroad), this.getProfile()]);
  },
  methods: {
    async save() {
      const { yearsAbroad } = this.form;
      await this.setYearsAbroad(yearsAbroad);
      this.$parent.close();
      this.$emit('saved');
    },
    close() {
      this.$parent.close();
    },
    updatePublicPensionAmount: debounce(async function updatePublicPensionAmount(yearsAbroad = 0) {
      if (!yearsAbroad) this.form.yearsAbroad = 0;
      const overrides = {
        weathers: [weathers.neutral],
        situations: [situations.continueWorking],
        overrides: { profile: { yearsAbroad } },
      };
      await this.calculatePredictions({ defaultScenarioId, overrides });
      const { grossPublicPension } = this.calculations;
      this.newPublicPension.value = formattingService.formatAmount(grossPublicPension);
      this.newPublicPension.isCalculated = true;
    }, 1000),
    ...mapActions({
      calculatePredictions: 'calculations/calculatePredictions',
      setYearsAbroad: 'profile/setYearsAbroad',
      getProfile: 'profile/get',
    }),
  },
  computed: {
    birthDate() {
      const date = new Date(this.profile.birthDate);
      return {
        day: date.getDate(),
        month: date.getMonth() + 1, // getMonth starts at zero
        year: date.getFullYear(),
      };
    },
    savedYearsAbroad() {
      return this.profile.yearsAbroad;
    },
    errorText() {
      if (!this.$v.form.yearsAbroad.$invalid) return '';
      return this.$i18n.t('error.between', {
        min: yearsAbroadLimits.min,
        max: yearsAbroadLimits.max,
      });
    },
    ...mapState(['calculations', 'profile']),
  },
  watch: {
    savedYearsAbroad(newValue) {
      this.form.yearsAbroad = newValue;
    },
    form: {
      handler() {
        if (!this.$v.form.yearsAbroad.$invalid) {
          this.newPublicPension.isCalculated = false;
          this.updatePublicPensionAmount(this.form.yearsAbroad);
        }
      },
      deep: true,
    },
  },
  components: {
    [Heading.name]: Heading,
    [BottomButtons.name]: BottomButtons,
    [Input.name]: Input,
    [Select.name]: Select,
    [TooltipWrapper.name]: TooltipWrapper,
  },
};
</script>

<style lang="scss" scoped src="./shared_dialog.scss"/>
