// eventBus.js - this is the Pub/Sub messagebus. It just passes events.
// It is imported in every component that needs to publish events on
// the bus, or listen to events on the bus.
// Credits: https://medium.com/easyread/vue-as-event-bus-life-is-happier-7a04fe5231e1

import Vue from 'vue'
export default new Vue()
