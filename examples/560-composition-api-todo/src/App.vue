<template>
  <div class="container">
    <!--      1. TodoList, WITHOUT extracting the composition to external file(s)-->
     <TodoList/>
    <hr>
    <!--      2. TodoList, WITH extracting the composition to external file(s)-->
<!--    <TodoListComposition/>-->
  </div>
</template>

<script>
// import TodoListComposition from "./components/TodoListComposition";
import TodoList from "./components/TodoList";

export default {
  name: 'App',
  components: {
    TodoList,
    // TodoListComposition,
  }
}
</script>
