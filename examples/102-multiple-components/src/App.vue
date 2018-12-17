<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" name="Peter"/>
        <h3>Single File Component inserted here:</h3>
        <SingleFileComponent/>
    </div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	import SingleFileComponent from "./components/SingleFileComponent";

	export default {
		name: 'app',
		components: {
			SingleFileComponent,
			HelloWorld
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
