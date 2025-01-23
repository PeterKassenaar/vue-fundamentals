import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useCountryStore = defineStore("country", () => {
    const countries = ref([]); // State for storing countries
    const loading = ref(false); // loading indicator
    const url = "https://restcountries.com/v3.1/all"; // no ref() needed, since the url is constant

    // Action: Fetch data from the API
    const fetchCountries = async () => {
        try {
            loading.value = true; // Set loading state
            // Simulate network delay with setTimeout()
            const response = await new Promise((resolve) => {
                setTimeout(async () => {
                    const axiosResponse = await axios.get(url);
                    resolve(axiosResponse);
                }, 1000); // 1-second delay
            });
            countries.value = response.data.map((country) => country);
        } catch (error) {
            console.error("Error fetching countries:", error);
        } finally {
            loading.value = false; // Reset loading state
        }
    };

    // Action: get a specific country from the list
    // Note: NO need to fire another http-request, as the data is already available
    const getCountryByName = (name) => {
        return countries.value.find((country) => country.name.common === name);
    }
    // Workshop: rewrite the above action to a getter/computed property on the store! See 'filteredCountries' example.

    // Action: Reset the countries list
    const resetCountries = () => {
        countries.value = []; // Clear the countries list
    };

    return {
        countries,
        loading,
        getCountryByName,
        fetchCountries,
        resetCountries, // Expose `fetchCountries` and `restCountries so it can be called explicitly from a component
    };
});
