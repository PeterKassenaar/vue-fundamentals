<template>
    <!--    Only show the table if there are more than 0 orders-->
    <div v-if="orders.length > 0">
        <h2>My orders:</h2>
        <table class="table table-striped">
            <tr>
                <th>Country</th>
                <th>Number</th>
                <th>Price</th>
            </tr>
            <tbody>
            <!--            Loop over every order-->
            <tr v-for="(order, index) in orders" :key="index">
                <td>{{ order.name }}</td>
                <td>{{ order.numOrders }}</td>
                <td>{{ order.cost }}</td>
            </tr>
            <tr>
                <td colspan="2">Total</td>
                <!--                TODO: format as currency-->
                <td><strong>{{ totalPrice }}</strong></td>
            </tr>
            </tbody>
        </table>
        <button @click="confirm()" class="btn btn-primary">Order</button>
        <button @click="cancel()" class="btn btn-danger">Empty Cart</button>
    </div>
</template>

<script>
	// 1. Import the same instance of the eventbus, to
	// listen to events published on the bus.
	import EventBus from '../shared/eventBus'

	export default {
		name: 'ShoppingCart',
		data() {
			return {
				orders: [], // array, holding our orders. This is the actual 'shopping cart'
				totalPrice: 0,
			}
		},
		// 2. Use the mounted() lifecycle hook to listen to events
		// published on the eventbus.
		mounted() {
			EventBus.$on('ORDER_COUNTRY', payload => {
				this.addCountryToCart(payload);
			})
		},
		methods: {
			addCountryToCart(country) {
				// 3. prepare a new order. TODO: make numOrders dynamic
				const newOrder = {
					...country,
					numOrders: 1
				};
				this.orders.push(newOrder);
				this.updateTotal();
			},
			updateTotal() {
				// 4. calculate the new total
				this.totalPrice = 0; // reset total
				this.orders.forEach(order => {
					this.totalPrice += order.cost;
				});
			},
			confirm() {
				// 5. post orders to db.
				alert(`TODO: publish ${this.orders.length} orders to database!`)
			},
			cancel() {
				// 6. reset, delete all orders
				this.orders = [];
			}
		}
	}
</script>

