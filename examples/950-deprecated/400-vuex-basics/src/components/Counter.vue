<template>
  <div>
    <h1>{{ counter }}</h1>
    <div>
      <button @click="increment()" class="btn btn-success">Increment</button>
      <button @click="decrement()" class="btn btn-info">Decrement</button>
      <br>
      <button @click="reset()" class="btn btn-danger">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",

  data() {
    return {
      //... all data
    }
  },

  methods: {
    increment() {
      this.$store.dispatch('increment', 1)
    },
    decrement() {
      this.$store.dispatch('decrement', 1)
    },
    reset() {
      this.$store.dispatch('reset')
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  }
}
</script>

<style scoped>

</style>
