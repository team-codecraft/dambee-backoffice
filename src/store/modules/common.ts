import axios from '@/plugins/axios'
import { ActionContext } from 'vuex'
import { CommonState } from '../models'

export const initialState = () => ({
    isLoading: false,
})

const state = initialState()

const getters = {
    isLoading: (state: CommonState) => state.isLoading,
}

const mutations = {
    setLoading (state: CommonState, isLoading: boolean) {
        state.isLoading = isLoading
    }
}

const actions = {
    async healthCheck () {
        try {
            const res = await axios.get(`/healthCheck/isAlive`);
            if (res.data.code === 200) {
                return res.data;
            }
            return res
        } catch (error) {
            return (error as any).response;
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
