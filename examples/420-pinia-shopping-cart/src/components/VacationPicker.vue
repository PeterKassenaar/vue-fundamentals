<template>
  <h1>{{ header }}</h1>
  <div class="row">
    <div class="col-6">
      <div class="alert alert-warning text-center">
        <h1>{{ currentCountry.name }}</h1>
        <h2>Capital: {{ currentCountry.capital }}
          <span v-if="isOnSale" class="badge bg-black">Sale!</span>
          <span v-if="isExpensive" class="badge bg-danger">(expensive)</span>
        </h2>
      </div>
      <button @click="prevCountry()" class="btn btn-success"> &lt;&lt; Back</button>
      <button @click="nextCountry()" class="btn btn-success">Forward &gt;&gt;</button>
      <hr>
      <ShoppingCart/>
    </div>
    <div class="col-6">
      <h2>Selected:</h2>
      <ul class="list-group">
        <li class="list-group-item"><span class="text-2xl">Price: &euro;{{ currentCountry.cost }}</span></li>
        <li class="list-group-item">{{ currentCountry.name }}</li>
        <li class="list-group-item">{{ currentCountry.capital }}</li>
        <li class="list-group-item">{{ currentCountry.details }}</li>
        <!--        Binding an image-->
        <li class="list-group-item">
          <img :src="imgUrl" :alt="'image of ' + currentCountry.name" class="img-fluid">
        </li>
        <li class="list-group-item" v-if="isExpensive">
          <span class="badge bg-danger rounded-pill">Expensive!</span>
        </li>
        <li class="list-group-item">
          <button class="btn btn-info btn-lg"
                  @click="addToCart(currentCountry)">
            Add to cart
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
// import the country countryData
import countryData from '@/data/CountryData';
import {useCartStore} from "@/stores/shoppingCartStore.js";
import ShoppingCart from "@/components/ShoppingCart.vue";


// create variables
const header = 'Pick your next vacation';
const data = countryData;
const currentCountryId = ref(0);
const cartStore = useCartStore()

// add current country to Pinia Shopping Cart (store)
const addToCart = (currentCountry) => {
  cartStore.addItemToCart(currentCountry)
}

// Automatically calculate current country, based on Id
const currentCountry = computed(() => {
  return data.countries.find(c => c.id === currentCountryId.value) || data.countries[0] // fallback property for first load
})

// Automatically calculate if a destination is expensive
const isExpensive = computed(() => {
  return currentCountry.value.cost > 4000;
});

// Automatically calculate if a destination is on Sale
const isOnSale = computed(() => {
  return currentCountry.value.cost < 1000;
});

// A computed property that returns the URL to the image for currentCountry.
const imgUrl = computed(() => {
  return new URL(`/src/assets/countries/${currentCountry.value.img}`, import.meta.url).href;
})


// Go to the previous country
const prevCountry = () => {
  currentCountryId.value--;
  if (currentCountryId.value <= 0) {
    currentCountryId.value = data.countries.slice(-1)[0].id; // get the id of last country
  }
}
// Go to the next country
const nextCountry = () => {
  currentCountryId.value++;
  if (currentCountryId.value > data.countries.length) {
    currentCountryId.value = data.countries[0].id; // set id equal to first country
  }
}
</script>
