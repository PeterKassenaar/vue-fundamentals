<template>
    <div id="app" class="container">
        <h1>Using mixins - see console</h1>
        <VacationList />
    </div>
</template>

<script>

	import VacationList from "./components/VacationList";

	export default {
		name: 'app',
		components: {
			VacationList
		}
	}
</script>

<style>
    /*This is a global style, because there is no 'scoped' keyword on the <style> tag */
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;
    }
</style>
