// composables/useCountries.js
import {ref} from "vue";
import axios from "axios";

export function useCountries() {
    const countries = ref([]);
    const errors = ref([]);

    const fetchCountries = async () => {
        const fields = 'name,capital,population,flags'; // fields to retrieve from the API, see https://restcountries.com/v3.1/all
        const url = `https://restcountries.com/v3.1/all?fields=${fields}`
        try {
            const response = await axios.get(url);
            countries.value = response.data;
        } catch (error) {
            errors.value.push(error);
        }
    };

    // Return the reactive data and the method
    return {
        countries,
        errors,
        fetchCountries,
    };
}
