<template>
  <div>
    <h2>List of Todo's - using Composition API and useful 'hooks' analogy</h2>
    <input type="text"
           placeholder="new todo..."
           class="form-control-lg"
           v-model="newTodo"
           @keyup.enter="addTodo()"
    >
    <button class="btn btn-primary"
            @click="addTodo()">
      Add Todo
    </button>
    <ul class="list-group">
      <!-- TODO (haha) - create a separate component for TodoListItems-->
      <li class="list-group-item"
          v-for="(todo, index) in todos" :key="index">
        <label>
                    <span :class="{'done' : todo.done}">
                    {{ todo.id }} - {{ todo.name }}
                    </span>
          <input type="checkbox"
                 v-model="todo.done">
        </label>
        <button class="btn btn-danger float-sm-right"
                @click="deleteTodo(todo)">
          Delete
        </button>
      </li>
    </ul>
    <p v-if="remainingItems">Items to be done: {{ remainingItems }}</p>
    <p v-if="!remainingItems">No more items, you're done!</p>
    <hr>
    <!--        <button class="btn btn-success" @click="save(todos)">Save</button>-->
    <!--        <button class="btn btn-success" @click="clear()">Clear</button>-->
  </div>
</template>

<script>
import useTodos from "../hooks/useTodos";
// import useLocalStorage from "../hooks/useLocalStorage";

export default {
  name: "TodoListComposition",
  setup() {
    // 1. Composing the API of this component together from various 'hooks',
    // using ES6 destructuring here
    const {
      newTodo,
      todos,
      addTodo,
      deleteTodo,
      toggleTodo,
      remainingItems,
    } = useTodos()

    // 2. Extending this app for future use - import more hooks/composition stuff
    // const {
    //     save,
    //     clear
    // } = useLocalStorage()

    // 3. API of this component, composed out of the imported functions
    return {
      newTodo,
      todos,
      addTodo,
      deleteTodo,
      toggleTodo,
      remainingItems,
      // save, // future use
      // clear // future use
    }

    // 4. Shorthand notation. A lot shorter, but less clear what the
    // exported members are.
    // return {
    //   ...useTodos()
    // }
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
  color: lightgray;
}
</style>
