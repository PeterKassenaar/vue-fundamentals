<template>
    <div>
        <h2>Search for a country</h2>
        <p>
            <input type="text"
                   @keyup.enter="searchCountry()"
                   v-model="countryName" class="form-control-lg" placeholder="Country name...">
            <button @click="searchCountry()" class="btn btn-primary">Go!</button>
        </p>
        <hr>
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
        name: "ApiSearchCountry",
        data() {
            return {
                url: 'https://restcountries.com/v2/name/',
                countries:[],
                countryName: ''
            }
        },
        methods:{
            searchCountry(){
            axios.get(`${this.url}${this.countryName}`)
                .then(response =>{
                    this.countries = response.data;
                })
            },
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
