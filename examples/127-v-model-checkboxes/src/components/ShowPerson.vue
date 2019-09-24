<template>
    <div class="" style="border : 1px solid black; padding: 4px">
        <p class="text-muted text-sm-left">component: ShowPerson.vue</p>
        <h2 v-if="!name">Nog geen naam gevonden...</h2>
        <h2 v-if="name">{{ name }}</h2>
    </div>
</template>

<script>
	export default {
		name: 'ShowPerson',
		props: {
			name: String
		},
		data() {
			return {}
		}
	}
</script>

