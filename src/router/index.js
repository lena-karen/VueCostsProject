import Vue from 'vue'
import Router from 'vue-router'
import AddCostForm from '../components/AddCostForm'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/form',
            name: 'addCosts',
            component: AddCostForm
        },
        {
            path: '/form/:type/:price',
            name: 'addFood',
            component: AddCostForm
        }
    ]
})