// counterservice.js - following the singleton pattern
export default class CounterService {
	counter = {
		number: 0,
		status: 'OK'
	};
	static instance;

	static getInstance() {
		if (!CounterService.instance) {
			CounterService.instance = new CounterService()
		}
		return CounterService.instance;
	}

	add() {
		this.counter.number++;
	}

	subtract() {
		this.counter.number--;
	}

	reset() {
		this.counter.number = 0;
	}

	getCounter() {
		return this.counter;
	}
}
