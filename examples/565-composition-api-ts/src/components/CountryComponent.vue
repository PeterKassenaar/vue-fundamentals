<template>
    <div>
        <input type="text"
               class="form-control-lg"
               placeholder="country name..."
               v-model="countryName"
               @keyup.enter="searchCountries()"
        >
        <button class="btn btn-primary"
                @click="searchCountries()">Search
        </button>
        <ul class="list-group">
            <li class="list-group-item"
                v-for="(country, index) in countries"
                :key="index">
                <img :src="country.flag"
                     :alt="'flag from ' + country.name "
                     class="flag"
                >
                <p>
                    <strong>{{ country.name }}</strong> <br>
                    Capital: {{ country.capital }}<br>
                    Population: {{ country.population }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import useCountries from "@/hooks/useCountries";

    export default {
        name: "CountryComponent",
        setup() {
            // using a 'hook'
            const {
                countryName,
                countries,
                searchCountries
            } = useCountries();

            return {
                countryName,
                countries,
                searchCountries
            }
        }
    }
</script>

<style scoped>
    .flag {
        max-width: 120px;
        float: left;
        margin: 8px;
        padding: 8px;
        border-right: 2px solid crimson;
        border-bottom: 2px solid crimson;
        border-radius: 4px;
    }
</style>
