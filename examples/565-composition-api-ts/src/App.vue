<template>
    <div class="container">
        <h2>Search Countries</h2>
        <CountryComponent/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import CountryComponent from "@/components/CountryComponent.vue";

    export default Vue.extend({
        name: 'App',
        components: {CountryComponent}
    });
</script>
