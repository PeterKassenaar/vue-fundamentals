// countermixin.js, generic counter file
import CounterService from '../services/CounterService'

export default {
	data() {
		return {
			counterService: CounterService.getInstance(),
			counter: {}
		}
	},
	methods: {
		add() {
			this.counterService.add();
		},
		subtract() {
			this.counterService.subtract();
		},
		reset() {
			this.counterService.reset();
		}
	},
	created() {
		this.counter = this.counterService.getCounter()
	},
}
