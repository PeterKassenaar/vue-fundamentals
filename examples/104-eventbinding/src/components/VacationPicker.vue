<template>
  <div class>
    <h1>{{ header }}</h1>
    <ul class="list-group">
      <li
        @mouseover="logCity(country.name)"
        class="list-group-item"
        v-for="country in data.countries"
        :key="country.id"
      >
        <span :id="country.id" :title="country.details">{{ country.id }} - {{country.name}}</span>
      </li>
    </ul>
    <hr>
    <h2>Capture click events</h2>
    <h3>{{ counter }}</h3>
    <button @click="increase()" class="btn btn-success">Increase ++</button>
    <button @click="decrease()" class="btn btn-danger">Decrease --</button>
  </div>
</template>

<script>
// import the country data
import data from "../data/data";

export default {
  name: "VacationPicker",
  data() {
    return {
      // make data available in app. This is shorthand notation for 'data : data'
      data,
      header: "Pick your next vacation",
      counter: 0
    };
  },
  methods: {
    // shorthand notation:
    increase() {
      console.log("The counter is increased: ", this.counter++);
      this.counter++;
    },
    decrease() {
      console.log("The counter is decreased: ", this.counter--);
      this.counter--;
    },
    logCity(countryName) {
      console.log({ countryName });
    }
  }
};
</script>

<style scoped>
</style>
