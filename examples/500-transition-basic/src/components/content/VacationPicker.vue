<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <h1>Local data - {{ header }}</h1>
                <ul class="list-group">
                    <li class="list-group-item"
                        @click="showCountry(country)"
                        v-for="country in data.countries" :key="country.id">
                <span :id="country.id"
                      :title="country.details">
                    {{ country.id }} - {{country.name}}
                </span>
                    </li>
                </ul>
            </div>
            <div class="col-md-6">
                <!--The Nested router view here-->
                <router-view></router-view>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <hr>
                <ShoppingCart></ShoppingCart>
            </div>
        </div>
    </div>
</template>

<script>
    // import the country data
    import data from '../../data/data';
    import ShoppingCart from "./ShoppingCart";

    export default {
        name: 'VacationPicker',
        components: {ShoppingCart},
        data() {
            return {
                data,
                header: 'Your next vacation'
            }
        },
        methods: {
            // a method for navigating to the specific country from code, instead of HTML
            showCountry(country) {
                console.log('navigate to ' + country.name);
                // navigate to next page using the parametrized route.
                this.$router.push({
                    name: 'detail',
                    params: {
                        id: country.id,
                        name: country.name
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
