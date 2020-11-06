<template>
    <div id="app" class="container">
        <h1>Conditionally applying styles</h1>
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
