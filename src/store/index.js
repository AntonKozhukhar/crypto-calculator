import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    currencies: {},
    selectedCurrency: {}
  },
  getters: {
    currenciesArray: ({ currencies }) => {
      let array = []
      for (const key in currencies) {
        array.push({
          name: key,
          exchange: +currencies[key].USD,
          img: require(`@/assets/${key}.png`)
        })
      }
      return array
    }
  },
  mutations: {
    SET_CURRENCIES: (state, data) => state.currencies = data,
    SET_SELECTED_CURRENCY: (state, currency) => state.selectedCurrency = currency
  },
  actions: {
    async getCurrencies({ commit }) {
      try {
        const res = await axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,XRP,ETH,LTC&tsyms=USD')
        commit('SET_CURRENCIES', res.data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  modules: {}
})
