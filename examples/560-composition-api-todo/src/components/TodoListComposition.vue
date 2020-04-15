<template>
    <div>
        <h2>Composed List of Todo's</h2>
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
                    {{ todo.id}} - {{ todo.name}}
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
            // composing the API of this component together from various 'hooks',
            // using ES6 destructuring here
            const {
                newTodo,
                todos,
                addTodo,
                deleteTodo,
                toggleTodo,
                remainingItems,
            } = useTodos()

            // possible future use - import more hooks/composition stuff
            // const {
            //     save,
            //     clear
            // } = useLocalStorage()

            // API of this component, composed out of the imported functions
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
        }
    }
</script>

<style scoped>
    .done {
        text-decoration: line-through;
        color: lightgray;
    }
</style>
