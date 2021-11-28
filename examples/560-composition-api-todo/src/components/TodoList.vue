<template>
  <div>
    <h2>List of Todo's - using Composition API, but in the 'classical' way</h2>
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
      <li class="list-group-item"
          v-for="(todo, index) in todos" :key="index">
        <label>
                    <span :class="{'done' : todo.done}">
                        {{ todo.id }} - {{ todo.name }}
                    </span>
          <input type="checkbox"
                 v-model="todo.done">
        </label>
      </li>
    </ul>
    <p v-if="remainingItems">Items to be done: {{ remainingItems }}</p>
    <p v-if="!remainingItems">No more items, you're done!</p>
  </div>
</template>

<script>
// Using Vue 2 in this project, so importing from the right library.
import {computed, reactive, ref} from '@vue/composition-api'

export default {
  name: "TodoList",
  setup() {
    // 0. Initialize basic properties and state
    const newTodo = ref('');
    let state = reactive({
      todos: [
        {id: 1, name: 'eat pizza', done: false},
        {id: 2, name: 'get sleep', done: false},
        {id: 3, name: 'go coding', done: false},
        {id: 4, name: 'attend meeting', done: false},
      ]
    });

    // Functionality
    // 1. Add a new todo
    const addTodo = () => {
      // check if a text is typed in
      if (newTodo.value && newTodo.value.trim()) {
        state.todos.push({
          id: state.todos.length + 1, // dummy id, based on length
          name: newTodo.value, // ref-value from v-model
          done: false
        })
        newTodo.value = '';
      }
      console.log(state.todos);
    }

    // 2. Toggle state of todo
    const toggleTodo = todo => {
      todo.done = !todo.done;
    }

    // Computed properties
    // 3. Calculate the remaining items
    const remainingItems = computed(() => {
      return state.todos.filter(todo => !todo.done).length
    })


    // 4. Return object from the setup function to expose them to the UI
    return {
      // properties
      newTodo,
      todos: state.todos,

      // computed properties
      remainingItems,

      // methods
      addTodo,
      toggleTodo

      //******************************************************
      // WORKSHOP: Add a 'Delete' button to every item. Delete the item from
      // the array with todos if clicked.
    }
  }
}
</script>

<style scoped>
.done {
  color: darkgrey;
  text-decoration: line-through;
}
</style>
