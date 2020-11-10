<template>
    <div id="app" class="container">
        <VacationPicker />
    </div>
</template>

<script>
	import VacationPicker from "./components/VacationPicker";

	export default {
		name: 'app',
		components: {
			VacationPicker
		}
	}
</script>
