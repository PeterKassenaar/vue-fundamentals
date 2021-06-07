<template>
    <div class="VacationPicker">
        <h2>Vue-ts VacationPicker</h2>
        <ul class="list-group">
            <li class="list-group-item"
                v-for="country in countries"
                @click="showCountry(country)">
                {{ country.id }} - {{ country.name}}
            </li>
        </ul>
        <div v-if="currentCountry">
            <h2>{{ currentCountry.name}}</h2>
            <p>
                {{ currentCountry.details}}
            </p>
        </div>
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";
    import data from "@/data/CountryData";
    import {Country} from "@/models/country.model";

    @Component
    export default class VacationPicker extends Vue {
        // class properties, typed according to model
        public countries: Country[] = data.countries;
        public currentCountry: Country | null = null; // correct, using the Union Type?

        public showCountry(country: Country): void {
            this.currentCountry = country;
        }
    }
</script>

<style scoped>

</style>
