<template>
    <div>
        <div class="row">
            <div class="col-6">
                <h1>{{ title }}</h1>
                <ul class="list-group">
                    <li v-for="(country, index) in data.countries"
                        @click="selectCountry(index)"
                        :key="country.id"
                        class="list-group-item">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id}} -
                    {{ country.name }}
                </span>
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <h2>Selected:</h2>
                <ul class="list-group">
                    <li class="list-group-item">{{ selectedCountry.id}}</li>
                    <li class="list-group-item">{{ selectedCountry.name}}</li>
                    <li class="list-group-item">{{ selectedCountry.capital}}</li>
                    <li class="list-group-item">{{ selectedCountry.details}}</li>
                    <li class="list-group-item">
                        <img :src="getImgUrl(selectedCountry.img)"
                             :alt="selectedCountry.img"
                             class="img-fluid" >
                    </li>
                    <li class="list-group-item" v-if="isExpensive">
                        <span class="badge badge-danger badge-pill">
                            Expensive!
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <hr>
                <h2>Countries cheaper than</h2>
                <select class="form-control-lg"
                        v-model="selectedCost"
                        @change="filterCountries"
                >
                    <option v-for="(cost, index) in costs"
                            :key="index"
                            :value="cost">
                        {{ cost }}
                    </option>

                </select>
                <ul class="list-group">
                    <li v-for="(country, index) in filteredCountries"
                        :key="index"
                        class="list-group-item">
                        {{ country.name }} (EUR: {{ country.cost}})
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/data';
    import mixins from '../mixins/mixins';

    export default {
        name: "VacationPicker",
        data() {
            return {
                data,
                title: 'Vue Vacation Picker',
                selectedCountryIndex: 0,
                costs: [1000, 2000, 3000, 4000, 5000, 6000],
                selectedCost: 1000,
                filteredCountries: []
            }
        },
        // Code, mixed in to this component
        mixins:[mixins],
        // lifecycle hook
        created(){
            console.log('Vacation Picker is created...');
        },
        methods: {
            selectCountry(index) {
                this.selectedCountryIndex = index;
            },
            filterCountries(){
                this.filteredCountries =
                    this.data.countries.filter(country => country.cost < this.selectedCost)
            }
        },
        computed: {
            selectedCountry() {
                return {
                    // longhand notation
                    // id: this.data.countries[this.selectedCountryIndex].id,
                    // name: this.data.countries[this.selectedCountryIndex].name,
                    // capital: this.data.countries[this.selectedCountryIndex].capital,
                    // cost: this.data.countries[this.selectedCountryIndex].cost,
                    // details: this.data.countries[this.selectedCountryIndex].details,
                    // img: this.data.countries[this.selectedCountryIndex].img

                    // shorthand notation
                    ...this.data.countries[this.selectedCountryIndex]
                }
            },
            isExpensive(){
                return this.data.countries[this.selectedCountryIndex].cost > 4000;
            }
        }
    }
</script>

<style scoped>

</style>
