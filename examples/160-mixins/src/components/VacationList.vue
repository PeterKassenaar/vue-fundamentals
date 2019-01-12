<template>
    <div class="">
        <h1>{{ header }}</h1>
        <ul class="list-group">
            <li class="list-group-item"
                v-for="country in data.countries" :key="country.id">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id }} - {{country.name}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
	// import the country data
	import data from '../data/data';
	// import the mixin
    import createdHookMixin from '../mixins/mixins.js'

	export default {
		name: "VacationList",
		data() {
			return {
				data,
				header: 'List of destinations',
			}
		},
        mixins:[createdHookMixin]

	}
</script>

<style scoped>

</style>
