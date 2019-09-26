<template>
    <div class="container">
        <router-link to="/">
            Basic Validation
        </router-link>
        |
        <router-link to="/custom">
            Custom Validation
        </router-link>
        |
        <hr>
        <router-view/>
        <hr>
        <div class="text-center text-muted">
            Copyright (C) 2020 - Peter Kassenaar
        </div>
    </div>
</template>

<script>

	export default {
		name: 'app',
	}
</script>

<style>
</style>
