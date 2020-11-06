<template>
  <div>
    <!-- 1. Using a button to toggle the state of isActive-->
    <button @click="toggleActive" class="btn btn-primary">Toggle class</button>
    <div :class="{'active': isActive}">
      <h3>First Div - click the button </h3>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt doloribus earum
      exercitationem id inventore ipsam iure, magni necessitatibus nemo nihil quia, repellendus saepe sapiente
      tenetur unde vero. Architecto, quasi.
    </div>

    <!-- 2. Using events to toggle the state of onHover-->
    <div :class="{'active2': onHover}" @mouseover="toggleHover" @mouseout="toggleHover">
      <h3>Second Div - mouseover me</h3>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt doloribus earum
      exercitationem id inventore ipsam iure, magni necessitatibus nemo nihil quia, repellendus saepe sapiente
      tenetur unde vero. Architecto, quasi.
    </div>
  </div>
</template>

<script>
export default {
  name: "ConditionalClass",
  data() {
    return {
      isActive: false,
      onHover: false
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
    toggleHover() {
      this.onHover = !this.onHover;
    }
  }

}
</script>

<style scoped>
.active {
  border: 2px solid cornflowerblue;
  background-color: lightblue;
  color: #333;
  border-radius: 4px;
}

.active2 {
  color: rebeccapurple;
  border: 2px solid cornflowerblue;
  background-color: silver;
  border-radius: 4px;
}
</style>
