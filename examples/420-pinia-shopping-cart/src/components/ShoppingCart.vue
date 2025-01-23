<script setup>
import {useCartStore} from "@/stores/shoppingCartStore.js";
const cart = useCartStore()
</script>

<template>
  <h2>Your Cart</h2>
  <p v-show="!cart.getCart.length">
    <i>Your cart is empty.</i>
  </p>
  <table class="table table-striped" v-show="cart.getCart.length">
    <thead>
    <tr>
      <td>Name</td>
      <td>Price</td>
      <td>&nbsp;</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in cart.getCart">
      <td>{{ item.name }}</td>
      <td>&euro;{{ item.cost.toLocaleString() }}</td>
      <td>
        <button class="btn btn-outline-danger btn-sm"
                @click="cart.removeItemFromCart(item.id)">
          Remove
        </button>
      </td>
    </tr>
    <tr>
      <td>Total</td>
      <td><strong>&euro;{{ cart.totalPrice.toLocaleString() }}</strong></td>
      <td>
        <button class="btn btn-outline-info btn-sm"
                @click="cart.checkout()">Checkout
        </button>
      </td>
    </tr>
    <tr>
      <td colspan="3">
        <button class="btn btn-outline-danger"
                @click="cart.resetCart()">Reset Cart
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>
