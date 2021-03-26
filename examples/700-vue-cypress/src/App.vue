<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>A small demo application on Vue Testing with Cypress. <br>
      Check <code>../cypress/integration/TodoList_spec.js</code> for details
    </p>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>
