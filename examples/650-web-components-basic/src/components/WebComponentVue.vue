<template>
    <div class="WebComponentVue">
        <h1>This is a Vue Web Component</h1>
        <p>Passed in message: {{ msg }}</p>
    </div>
</template>

<script>
	export default {
		name: 'WebComponentVue',
		data() {
			return {}
		},
		props: {
			msg: String
		}
	}
</script>
