import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState({
        key: 'backoffice-web',
        paths: ['common']
    })],
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        common
    }
})
