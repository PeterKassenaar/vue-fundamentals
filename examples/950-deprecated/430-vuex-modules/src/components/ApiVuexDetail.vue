<!--ApiVuexDetail.vue-->
<template>
    <div v-if="country">
        <h2>Details for {{ country.name }} - directly from store</h2>
        <h3>No additional Http call needed! Check the DevTools</h3>
        <table class="table table-striped">
            <tr>
                <td>Flag</td>
                <td><img :src="country.flag" class="imgFlag" alt="Flag of this country"></td>
            </tr>
            <tr>
                <td>Capital</td>
                <td>{{ country.capital}}</td>
            </tr>
            <tr>
                <td>Population</td>
                <td>{{ country.population}}</td>
            </tr>
            <tr>
                <td>region / subregion</td>
                <td>{{ country.region}} / {{ country.subregion }}</td>
            </tr>
            <tr>
                <td>Timezones</td>
                <td>{{ country.timezones }}</td>
            </tr>
            <tr>
                <td>International calling code</td>
                <td>+{{ country.callingCodes[0]}}</td>
            </tr>

        </table>
    </div>
</template>

<script>
    // import {mapGetters} from 'vuex';

    export default {
        name: "ApiVuexDetail",
        created() {
            // get name from the url
            this.name = this.$route.params.name;
        },
        computed: {
            country() {
                return this.$store.getters['countries/getCountry'](this.name); // <== ugly notation, IMO! See https://stackoverflow.com/questions/41833424/how-to-access-vuex-module-getters-and-mutations and https://github.com/nuxt/nuxt.js/issues/2723
            }

            // Using the mapGetters method, see https://vuex.vuejs.org/guide/getters.html#the-mapgetters-helper
            // (not really profitable here, but it can be if you have a lot of getters)
            // mix the getters into a computed property using the object spread operator
            // ...mapGetters(['getCountry']),
            // // computed property still needed, because the getter requires a parameter
            // country(){
            //     return this.getCountry(this.name)
            // }
        }
    }
</script>

<style scoped>
    .imgFlag {
        max-width: 80px;
        border: 1px solid gray;
        border-radius: 8px;
        margin-right: 4px;
    }
</style>
