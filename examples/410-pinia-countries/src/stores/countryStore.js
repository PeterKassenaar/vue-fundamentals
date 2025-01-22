import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

export const useCountryStore = defineStore("country", () => {
    const countries = ref([]); // State for storing countries
    const loading = ref(false); // loading indicator
    const filterLetter = ref(""); // State for the filter input
    const url = "https://restcountries.com/v3.1/all"; // no ref() needed, since the url is constant

    // Computed property for filtered countries
    const filteredCountries = computed(() => {
        if (!filterLetter.value) {
            return countries.value;
        }
        return countries.value.filter((country) =>
            country.name.common.toLowerCase().startsWith(filterLetter.value.toLowerCase())
        );
    });

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

    // Action: Reset the countries list
    const resetCountries = () => {
        countries.value = []; // Clear the countries list
        filterLetter.value = ""; // Optionally clear the filter input (so we can see all countries again on next fetch().
    };

    return {
        countries,
        loading,
        filterLetter,
        filteredCountries,
        fetchCountries,
        resetCountries, // Expose `fetchCountries` and `restCountries so it can be called explicitly from a component
    };
});
