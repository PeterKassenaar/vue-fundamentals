<template>
    <div class="ComponentA">
        <h2>Component A</h2>
        <h3>{{ counter.number }}</h3>
    </div>
</template>

<script>

	import counterMixin from '../mixins/counterMixin'

	export default {
		name: 'ComponentA',
		mixins: [counterMixin]
	}
</script>

<style scoped>

</style>
