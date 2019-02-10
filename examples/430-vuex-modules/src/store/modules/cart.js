// cart.js - vuex module for the Shopping Cart in the store

export default {
	namespaced:true,
	state: {
		// State for working with the shopping cart
		items: [],
		checkoutStatus: null,
	},
	mutations: {
		// Mutations for working with the Shopping Cart
		ADD_TO_CART(state, payload) {
			state.items = [...state.items, payload]
		},
		REMOVE_FROM_CART(state, payload) {
			state.items = state.items.filter(item => item !== payload)
		},
		SET_CHECKOUT_STATUS(state, payload) {
			state.checkoutStatus = payload;
		},
		CLEAR_CART(state) {
			state.items = [];
		},
	},
	actions: {
		// Actions for working with the Shopping Cart
		addCountryToCart(context, country) {
			context.commit('SET_CHECKOUT_STATUS', null);
			context.commit('ADD_TO_CART', country);
			// TODO: check if country is already in cart, the increment the number, instead of just adding it again
		},
		removeCountryFromCart(context, country) {
			context.commit('SET_CHECKOUT_STATUS', null);
			context.commit('REMOVE_FROM_CART', country);
		},
		checkout(context) {
			context.commit('SET_CHECKOUT_STATUS', 'successful');
			console.log('Checked out. TODO: Save in database: ', [...this.state.cart.items]);
			context.commit('CLEAR_CART');
		},
		clearCart(context) {
			context.commit('CLEAR_CART');
		},
		resetStatus(context) {
			context.commit('SET_CHECKOUT_STATUS', null)
		},

	},
	getters: {
		// Getters for working with the Shopping Cart
		cartProducts: (state) => {
			return state.items;
		},
		cartTotalPrice: (state) => {
			let totalPrice = 0;
			state.items.forEach(item => {
				totalPrice += item.cost;
			});
			return totalPrice;
			// if you like the .reduce function you could do it this way:
		},

	}
}
