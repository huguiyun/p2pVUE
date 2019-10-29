import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
/* 注册vuex-along */
import vuexAlong from 'vuex-along'
Vue.use(Vuex)

const store = new Vuex.Store({
 	state,
 	getters,
 	actions,
 	mutations,
  /* 引用vuex-along,保存vuex数据 */
  plugins:[vuexAlong()]
 })

 export default store
