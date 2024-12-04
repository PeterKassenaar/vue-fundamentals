<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>My name is: {{ name }}</h2>
        <hr>
        <ComponentOne></ComponentOne>
        <ComponentTwo></ComponentTwo>
    </div>
</template>

<script>
	import ComponentOne from "./ComponentOne";
	import ComponentTwo from "./ComponentTwo";

	export default {
		name: 'HelloWorld',
		components: {ComponentTwo, ComponentOne},
		props: {
			msg: String,
			name: String
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
