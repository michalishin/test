import Vuex from 'vuex'

var cookieparser = require('cookieparser')

const createStore = () => {
  return new Vuex.Store({
    state: {
      auth: null
    },
    mutations: {
      update (state, data) {
        state.auth = data
      }
    },
    actions: {
      nuxtServerInit ({ commit }, { req }) {
        let accessToken = null
        if (req.headers.cookie) {
          let parsed = cookieparser.parse(req.headers.cookie)
          if (parsed.auth) {
            accessToken = JSON.parse(parsed.auth)
          }
        }
        commit('update', accessToken)
      }
    }
  })
}

export default createStore
