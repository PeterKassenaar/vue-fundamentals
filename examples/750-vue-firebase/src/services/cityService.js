// Example of a Vue 'service'. This is a generic class that
// works with the firestore cities.
// The service is imported in every component that needs access
// to the database. So Cloud Firestore is not directly mentioned in the components.

import {db} from "@/db";

// Firestore path to our collection of cities
const citiesCollection = 'cities';

export default new class cityService {
    // return all cities
    getCities() {
        return db.collection(citiesCollection)
            .orderBy('name');
    }

    // get a single city
    getCity(id) {
        return db.collection(citiesCollection)
            .doc(id);
    }

    // add a city
    addCity(city) {
        return db.collection(citiesCollection)
            .add(city)
    }

    // update a city
    updateCity(city) {
        return db.collection(citiesCollection)
            .doc(city.id)
            .set(city); // or: use .update() if you only want to update specific fields
    }

    // delete a city
    deleteCity(id) {
        return db.collection(citiesCollection)
            .doc(id)
            .delete();
    }
}
