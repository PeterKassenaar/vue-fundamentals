<template>
    <div id="app" class="container">
        <h1>Simple store app</h1>
        <Counter />
        <hr>
        <!--<AnotherCounter />-->
    </div>
</template>

<script>
    import Counter from "@/components/Counter";
    import AnotherCounter from "@/components/AnotherCounter";

    export default {
        name: 'app',
        components: {
            AnotherCounter,
            Counter
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
