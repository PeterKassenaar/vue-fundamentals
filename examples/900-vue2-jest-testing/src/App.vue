<template>
  <div id="app">
    <div>
      <h3>Let's test your calculation skills.</h3>
      <p>What is the sum of the two numbers?</p>
      <div class="inline">
        <p>{{ x1 }} + {{ x2 }} =</p> <input v-model="guess">
        <button @click="check">Check Answer</button>
      </div>
      <button @click="refresh">Refresh</button>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      x1: Math.ceil(Math.random() * 100),
      x2: Math.ceil(Math.random() * 100),
      guess: "",
      message: ""
    }
  },
  methods: {
    check() {
      if (this.x1 + this.x2 === parseInt(this.guess)) {
        this.message = "Well done!"
      } else {
        this.message = "Sorry, not the correct answer"
      }
    },
    refresh() {
      this.x1 = Math.ceil(Math.random() * 100);
      this.x2 = Math.ceil(Math.random() * 100);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.inline * {
  display: inline-block;
}

img {
  height: 350px;
}
</style>
