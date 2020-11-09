<template>
  <div class="">
    <h1>{{ header }}</h1>
    <ul class="list-group">
      <li class="list-group-item"
          :class="{'lightblueBackground': country.cost < selectedCost,
                        'darkredBackground': country.cost > 4000 }"
          v-for="country in data.countries" :key="country.id">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id }} - {{ country.name }}
                </span>
      </li>
    </ul>
    <h2>Destinations cheaper than:
      <!--Using v-model here for two-way binding-->
      <label>
        <select class="form-control-lg" v-model="selectedCost">
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
          <option value="4000">4000</option>
          <option value="5000">5000</option>
          <option value="6000">6000</option>
        </select>
      </label>
    </h2>
  </div>
</template>

<script>
// import the country data
import data from '../data/data';

export default {
  name: "VacationList",
  data() {
    return {
      data,
      header      : 'List of destinations',
      selectedCost: 1000 // initial property of v-model
    }
  }
}
</script>

<style scoped>
.lightblueBackground {
  background-color : #b7e6ad;
}

.darkredBackground {
  background-color : darkred;
  color            : white;
}
</style>
