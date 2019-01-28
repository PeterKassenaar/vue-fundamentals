// ../store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
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
    actions:{
        increment(context, value){
            context.commit('INCREMENT', value)
        },
        decrement(context, value){
            context.commit('DECREMENT', value)
        },
        reset(context){
            context.commit('RESET')
        }

    }
})
