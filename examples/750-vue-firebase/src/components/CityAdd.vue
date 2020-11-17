<template>
  <div class="row">
    <div class="col">
      <h2 class="alert alert-info">Add a new city</h2>
      <label>
        <input class="form-control-lg" type="text"
               v-model="cityName" placeholder="City name...">
      </label>
      <label>
        <input class="form-control-lg" type="text"
               v-model="cityProvince" placeholder="Province...">
      </label>
      <label>
        <input class="form-control-lg" type="text"
               v-model="cityHighlights"
               placeholder="Highlights (comma separated)...">
      </label>
      <hr>
      <button @click="addCity()"
              class="btn btn-success">
        <span class="fa fa-save"></span>
        Save
      </button>
      <button @click="this.$router.push('/')"
              class="btn btn-outline-dark">
        <span class="fa fa-undo"></span>
        Cancel
      </button>
      <h3 v-if="cityAdded" class="alert alert-success">City added...</h3>
    </div>
  </div>
</template>

<script>
import cityService from "@/services/cityService";

export default {
  name: "CityAdd",
  data() {
    return {
      cityName: '',
      cityProvince: '',
      cityHighlights: '',
      cityAdded: false
    }
  },
  methods: {
    addCity() {
      // need at least 2 characters in city name
      if (this.cityName.trim().length >= 2) {
        const newCity = {
          name: this.cityName,
          province: this.cityProvince,
          highlights: this.cityHighlights
        }
        cityService.addCity(newCity)
        // Show alert, go back to homepage after 1,5 seconds
        this.cityAdded = true;
        setTimeout(() => {
          this.$router.push('/');
        }, 1500)
      } else {
        console.log('You need at least two (2) characters in the city name.');
      }
    }
  }
}
</script>

<style scoped>
label {
  display: block;
}
</style>
