import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pizzaSize: "",
    pizzaToppings: [],
    customerDetails: {}
  },
  mutations: {
    setSize(state, size) {
      state.pizzaSize = size;
    },
    setToppings(state, toppings) {
      state.pizzaToppings = toppings;
    },
    setDetails(state, details) {
      state.customerDetails = details;
    }
  },
  actions: {
    setPizzaSize(context, size) {
      context.commit('setSize', size);
    },
    setPizzaToppings(context, toppings) {
      context.commit('setToppings', toppings);
    },
    setCustomerDetails(context, details) {
      context.commit('setDetails', details);
    }
  },
  modules: {
  }
})
