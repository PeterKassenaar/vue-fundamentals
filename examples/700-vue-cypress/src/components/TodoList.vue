<template>
  <div class="row">
    <div class="col-md-6">
      <div>
        <label>
          <input class="form-control-lg"
                 id="new-todo"
                 type="text"
                 @keyup.enter="addTodo"
                 v-model="newTodo">
        </label>
        <button
            class="btn btn-success"
            @click="addTodo">Add Todo
        </button>
        <ul class="list-group">
          <li class="todo list-group-item"
              @click="$event.target.classList.toggle('completed')"
              v-for="(todo, index) in todos"
              :key="index">
            {{ todo }}
            <button
                class="delete-todo btn btn-danger float-right"
                @click="deleteTodo(index)">Del
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      todos: [],
      newTodo: ''
    }
  },
  methods: {
    // Some very simple methods to addd/delete items
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
}
</script>


<style scoped>
li {
  cursor: pointer;
  font-size: 22px;
  color: darkblue;
}

.completed {
  text-decoration: line-through;
  color: lightblue;
}
</style>
