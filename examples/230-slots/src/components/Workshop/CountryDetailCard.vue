<template>
<!--  We render this CountryDetail component *inside* a Vue Card. The various-->
<!--  slots in the Vue Card are used-->
  <VueCard>
    <h2 slot="card-title">{{ country.name }}</h2>
    <img slot="card-photo"
         :src="getImgUrl(country.img)"
         :alt="country.img"
         class="img-fluid">
    <ul slot="card-text" class="list-group">
      <li class="list-group-item">
        {{ country.id }}
      </li>
      <li class="list-group-item">{{ country.name }}</li>
      <li class="list-group-item">{{ country.capital }}</li>
      <li class="list-group-item">{{ country.details }}</li>
      <li class="list-group-item" v-if="isExpensive">
        <span class="badge badge-danger badge-pill">Expensive!</span>
      </li>
      <li class="list-group-item" v-if="isOnSale">
        <span class="badge badge-warning badge-pill">On Sale!</span>
      </li>
    </ul>
    <button slot="card-btn">More info</button>
  </VueCard>
</template>

<script>
import VueCard from "@/shared/VueCard";

export default {
  name: "CountryDetailCard",
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
      return require('@/assets/countries/' + img);
    }
  },
  computed: {
    isExpensive() {
      return this.country.cost > 4000;
    },
    isOnSale() {
      return this.country.cost < 1000;
    }
  }
}
</script>
