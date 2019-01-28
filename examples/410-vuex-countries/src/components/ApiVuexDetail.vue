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
    export default {
        name: "ApiVuexDetail",
        created() {
            // call axios with the url, it returns a promise.
            this.name = this.$route.params.name;

        },
        computed: {
            country() {
               return this.$store.getters.getCountry(this.name);
            }
        }
    }
</script>

<style scoped>

</style>
