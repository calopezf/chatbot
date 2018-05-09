import Vue from 'vue';
import Vuex from 'Vuex';
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export const store =  new Vuex.Store({
  state: {
    chats:[]
  },
  getters,
  mutations,
  actions
})
