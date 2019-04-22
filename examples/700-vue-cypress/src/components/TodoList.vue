<template>
    <div class="app">
        <input type="text" id="new-todo" @keyup.enter="addTodo" v-model="newTodo">
        <button @click="addTodo">Add Todo</button>
        <ul>
            <li
                    @click="$event.target.classList.toggle('completed')"
                    v-for="(todo,index) in todos"
                    :key="index">
                <span class="todo">{{ todo }}</span>
                <button class="delete-todo" @click="deleteTodo(index)">Del</button>
            </li>
        </ul>
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
			addTodo() {
				let todo = document.querySelector('#new-todo');
				if (todo.value.length > 0 && this.todos.indexOf(todo.value) < 0) {
					this.todos.push(this.newTodo);
					this.newTodo = '';
				}
			},
			deleteTodo(index) {
				this.todos.splice(index, 1);
			}
		}
	}
</script>


<style scoped>
    li.todo {
        cursor: pointer;
    }

    .completed {
        text-decoration: line-through;
    }
</style>
