import CountryService from "@/shared/CountryService";
import {ref} from "@vue/composition-api";
import Country from "@/shared/Country";

export default () => {
    // state
    const countryService = new CountryService();
    const countries = ref<Country[]>([]);
    const countryName = ref('');

    const searchCountries = async (): Promise<void> => {
        countries.value = await countryService.fetchCountries(countryName.value)
    }

    return{
        countries,
        countryName,
        searchCountries
    }
}
