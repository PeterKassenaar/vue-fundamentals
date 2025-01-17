import {defineStore} from "pinia";
import {ref} from "vue";

export const useCounterStore = defineStore('counter',
    () => {
        // store state
        const count = ref(0);

        // 1. store methods/actions
        const increment = () => count.value++;

        // 2. or, longhand notation
        const decrement = () => {
            return count.value--;
        }

        // 3. or, classical notation
        function reset() {
            count.value = 0
        }

        // Remember to return all public properties from store
        return {
            count,
            increment,
            decrement,
            reset
        }
    })
