<template>
    <div class="container">
        <TodoList/>
        <hr>
<!--        <TodoListComposition/>-->
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
