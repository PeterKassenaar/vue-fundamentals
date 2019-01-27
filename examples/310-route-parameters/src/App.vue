<!--App.vue-->
<template>
    <div id="app" class="container">
        <MainNavigation />
        <router-view></router-view>
    </div>
</template>

<script>
	import MainNavigation from "./components/MainNavigation";

	export default {
		name: 'app',
		components: {
			MainNavigation,
		}
	}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;
    }
</style>
