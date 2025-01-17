<template>
    <div>
        <h2>All countries in the world - fetched via direct http-call from the component</h2>
        <ul class="list-group" v-if="countries && countries.length">
            <li class="list-group-item"
                v-for="country of countries"
                @click="getCountry(country.name)"
                :key="country.name">
                <span class="float-left">
                    <img :src="country.flag" class="imgFlag" alt="Flag of this country">
                </span>
                <h4>{{ country.name }} </h4>
                <p>{{ country.capital}}, pop. {{ country.population}}</p>

            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ApiComponent",
        data() {
            return {
                // url of the external api
                url: 'https://restcountries.com/v2/all?fields=name,capital,flag,population',
                countries: [],
                errors: []
            }
        },
        created() {
            // call axios with the url, it returns a promise.
            axios.get(this.url)
                .then(response => this.countries = response.data)
                .catch(err => this.errors.push(err))
        },
        methods: {
            getCountry(name) {
                this.$router.push({
                    name: 'api-detail',
                    params: {
                        name: name
                    }
                })
            }
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
