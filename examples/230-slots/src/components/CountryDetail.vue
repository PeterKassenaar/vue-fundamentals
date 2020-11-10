<template>
  <div>
    <VueCard>
      <img :src="getImgUrl(country.img)" slot="card-photo" alt="">
      <p slot="card-title">
        {{ country.name }}
      </p>
      <p slot="card-text">
        {{ country.details }}
      </p>
      <p slot="card-btn"> Meer informatie</p>
    </VueCard>
  </div>
</template>

<script>
import VueCard from '../shared/VueCard';

export default {
  name: "CountryDetail",
  components: {VueCard},
  props: {
    // example props, including validation types
    country: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImgUrl(img) {
      return require('../assets/countries/' + img);
    },
    setRating(value) {
      // emit the rating up to the parent component
      this.$emit('rating', value);
    }
  },
  computed: {
    isExpensive() {
      return this.country.cost > 4000;
    }
    ,
    isOnSale() {
      return this.country.cost < 1000;
    }
  }
}
</script>

<style scoped>

</style>
