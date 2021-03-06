import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    account: 'Glove'
  },
  mutations: {
    fetchArticles: (state, payload) => {
      state.articles = payload
    }
  },
  actions: {
    fetchArticles: async ({ commit }) => {
      const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
      const result = await (await axios.get(api))
      console.log(result)
      const payload = result.data.data
      commit('fetchArticles', payload)
    }
  }
})
