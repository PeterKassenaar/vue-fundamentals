import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart', () => {
    // state properties / items
    const items = ref([]); // NOT exported, as we only want to update items[] via getters/setters.

    // Actions
    const addItemToCart = (country) => {
        items.value.push(country)
    }
    const removeItemFromCart = (id) => {
        items.value = items.value.filter(item => item.id !== id);
    }
    const resetCart = () => {
        items.value = []
    }

    const checkout = () => {
        // dummy checkout
        const msg =`Checkout successful! Total amount due: EUR ${totalPrice.value}`
        alert(msg);
        console.log('TODO: Post to database: ', items.value);
        resetCart();
    }

    // Getters / computed values
    const getCart = computed(() =>{
        return items.value;
    });

    const totalPrice = computed(() => {
        let total = 0;
        items.value.forEach((country) => {
            total += country.cost;
        })
        return total;
    })

    return {
        getCart,
        addItemToCart,
        removeItemFromCart,
        resetCart,
        totalPrice,
        checkout
    }
})
