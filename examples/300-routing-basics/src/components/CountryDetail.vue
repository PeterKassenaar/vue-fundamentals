<template>
  <div>
    <h2>{{ country.name }}</h2>
    <ul class="list-group">
      <li class="list-group-item">
        {{ country.id }}
        <span class="float-lg-end">
        <!--        Emitting directly from the template. Not recommended, IMO-->
          <!--        <button @click="$emit('rating', 1)" class="btn btn-success btn-sm">+1</button>-->
        <button @click="setRating(1)" class="btn btn-success btn-sm">+1</button>
        <button @click="setRating(-1)" class="btn btn-danger btn-sm">-1</button>
      </span>
      </li>
      <li class="list-group-item">{{ country.name }}</li>
      <li class="list-group-item">{{ country.capital }}</li>
      <li class="list-group-item">
        <img :src="imgUrl"
             :alt="country.img"
             class="img-fluid">
      </li>
      <li class="list-group-item">{{ country.details }}</li>
      <li class="list-group-item" v-if="isExpensive">
        <span class="badge bg-danger badge-pill">Expensive!</span>
      </li>
      <li class="list-group-item" v-if="isOnSale">
        <span class="badge bg-warning badge-pill">On Sale!</span>
      </li>
    </ul>
  </div>
</template>


<script setup>
// country property.
const {country} = defineProps({
  country: {
    type: Object,
    required: true
  }
})

import {computed, ref} from "vue";

// Let the component know we are emitting two events: 'rating' and 'favorite'.
const emit = defineEmits(['rating', 'favorite'])

// The function that is called from the template.
// In this case we emit a 'value', being +1 or -1 here. This is also often called the 'payload' of the event.
const setRating = value => {
  // optional: do other stuff first.
  // finally: throw your event, using one of the names defined on line #42
  emit('rating', value);
}

// WORKSHOP: Create a method that sets the current country as 'favorite'. Show the
// favorite status (true|false) in both the parent and the child component.
// Start with enhancing the data object with a 'favorite' property and work from there.

// Computed properties.
// Automatically calculate if a destination is expensive
const isExpensive = computed(() => {
  return country.cost > 4000;
});

// Automatically calculate if a destination is on Sale
const isOnSale = computed(() => {
  return country.cost < 1000;
});

// A computed property that returns the URL to the image for currentCountry.
const imgUrl = computed(() => {
  return new URL(`/src/assets/countries/${country.img}`, import.meta.url).href;
})
</script>
