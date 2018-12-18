<template>
    <div id="app" class="container">
        <h1>Three components. Same class name, different styling.</h1>
        <ComponentOne />
        <ComponentTwo />
        <ComponentThree />
    </div>
</template>

<script>

	import ComponentOne from "./components/ComponentOne";
	import ComponentTwo from "./components/ComponentTwo";
	import ComponentThree from "./components/ComponentThree";

	export default {
		name: 'app',
		components: {
			ComponentThree,
			ComponentTwo,
			ComponentOne,
		}
	}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;
    }
</style>
