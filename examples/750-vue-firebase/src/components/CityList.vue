<template>
  <div>
    <hr>
    <h2 class="alert alert-info">Cities in Cloud Firestore:</h2>
    <ul class="list-group">
      <li class="list-group-item"
          v-for="city in cities" :key="city.id">
        <h3>{{ city.name }}</h3>
        <p>{{ city.province }}
          <span class="fa fa-trash float-right" @click="deleteCity(city)"></span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import cityService from "@/services/cityService";

export default {
  name: "CityList",
  data() {
    return {
      cities: []
    }
  },
  methods:{
    deleteCity(city){
      if (confirm(`Do you really want to delete ${city.name}? This CANNOT be undone` )){
        cityService.deleteCity(city.id);
      }
    }
  },
  firestore: {
    // get the cities via the cityService, bind to local variable
    cities: cityService.getCities()
  }
}
</script>
