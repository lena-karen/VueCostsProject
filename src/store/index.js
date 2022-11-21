import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    mutations: {
        addNewCost: (state, payload) => state.costsList.push(payload)
    },
    state: {
        categories: [
            'food',
            'travel',
            'transport',
            'entertainment'
        ],
        costsList: [{id: 1, type: 'food', date: '12/11/2022', amount: 200}],
        quantityOnPage: 5,
        showForm: false
    },
    getters: {
        getCategories: (state) => state.categories,
        getCostsList: (state) => state.costsList,
        getQuantityOnPage: (state) => state.quantityOnPage,
        getFormShow: (state) => state.showForm
    }
})