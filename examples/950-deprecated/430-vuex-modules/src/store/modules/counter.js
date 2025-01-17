// counter.js - vuex store module on the counter
export default {
	namespaced: true,
	state: {
		counter: 0
	},
	mutations: {
		INCREMENT(state, status) {
			state.counter += status;
		},
		DECREMENT(state, status) {
			state.counter -= status
		},
		RESET(state) {
			state.counter = 0;
		}
	},
	actions: {
		increment(context, value) {
			context.commit('INCREMENT', value)
		},
		decrement(context, value) {
			context.commit('DECREMENT', value)
		},
		reset(context) {
			context.commit('RESET')
		}
	},
}
