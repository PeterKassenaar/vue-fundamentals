// ../hooks/useTodos.js

import {computed, reactive, ref} from "@vue/composition-api";

export default () => {
    // 0. initialization
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

    // 2. Delete a todo
    const deleteTodo = (todo) => {
        const index = state.todos.indexOf(todo);
        state.todos.splice(index, 1);
    }

    // 3. Toggle state of todo
    const toggleTodo = todo => {
        console.log(state.todos);
        todo.done = !todo.done;
    }

    // computed properties
    // 4. Calculate remaining items
    const remainingItems = computed(() => {
        return state.todos.filter(todo => !todo.done).length;
    })

    // 5...

    // return object, to be consumed by component that imports this function (or 'hook').
    return {
        newTodo,
        todos: state.todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        remainingItems,
    }
}
