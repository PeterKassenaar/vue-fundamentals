// country.model.ts
export interface Country {
    id: number;
    name: string;
    capital: string;
    cost: number;
    img: string;
    details: string;
}

// To be used with dynamic data, coming from API https://restcountries.eu/
export interface CountryApi{
    name: string;
    population: string;
    capital: string;
    flag: string;
}
