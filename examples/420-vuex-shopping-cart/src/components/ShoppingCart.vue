<template>
    <div>
        <h2>Your Cart</h2>
        <p v-show="!products.length">
            <i>Your cart is empty.</i>
        </p>
        <ul class="list-group">
            <li class="list-group-item"
                v-for="(product, index) in products"
                :key="index">
                {{ product.name }} - {{ product.cost }} <!-- TODO: add quantity -->
                <button @click="deleteCountry(product)"
                        class="btn btn-outline-danger btn-sm">
                    Delete
                </button>
            </li>
            <li class="list-group-item">
                <p class="text-capitalize">
                    <strong>Total: $ {{ total }}</strong>
                </p>
            </li>
        </ul>
        <p>
            <button class="btn btn-outline-success"
                    :disabled="!products.length"
                    @click="checkout(products)">
                Checkout
            </button>
        </p>
        <p class="alert alert-info" v-show="checkoutStatus">Checkout {{ checkoutStatus }}.
            <button class="btn btn-outline-info btn-sm float-right" @click="reset()">Reset</button>
        </p>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex'

    export default {
        name: "ShoppingCart",
        computed: {
            ...mapState({
                checkoutStatus: state => state.checkoutStatus
            }),
            ...mapGetters({
                products: 'cartProducts',
                total: 'cartTotalPrice'
            })
        },
        methods: {
            checkout(products) {
                this.$store.dispatch('checkout', products)
            },
            deleteCountry(country){
                this.$store.dispatch('removeCountryFromCart', country)
            },
            reset(){
                this.$store.dispatch('resetStatus')
            }
        }
    }
</script>

<style scoped>

</style>
