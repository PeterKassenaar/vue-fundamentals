// CountryService - a generic class for fetching country data
import axios from 'axios';
import Country from '@/shared/Country';

// API endpoint & fields
const url = 'https://restcountries.eu/rest/v2/name/';
const fields = '?fields=name;flag;capital;population';

export default class CountryService {

    // fetch countries, based on name
    async fetchCountries(name: string): Promise<Country[]> {
        const {data, status} = await axios.get(url + name + fields);
        if(data && status === 200) {
            return data;
        }
        // todo: catch errors
        return [];
    }
}
