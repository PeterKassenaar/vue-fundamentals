<template>
    <div v-if="country">
        <h2>Details for {{ country.name }}</h2>
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
                <td>region / subregion </td>
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
    import axios from 'axios';
    export default {
        name: "ApiCountryDetail",
        data() {
            return {
                // url of the external api
                url: 'https://restcountries.eu/rest/v2/name/',
                country:null,
                name: '',
                errors: []
            }
        },
        created() {
            // call axios with the url, it returns a promise.
            this.name = this.$route.params.name;
            axios.get(`${this.url}${this.name}?fullText=true`)
                .then(response => this.country = response.data[0])
                .catch(err => this.errors.push(err))
        }
    }
</script>

<style scoped>
    .imgFlag {
        max-width: 180px;
        border: 1px solid gray;
        border-radius: 8px;
        margin-right: 4px;
    }
</style>
