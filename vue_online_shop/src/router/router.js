import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '../components/Catalog'
import Cart from '../components/Cart'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: Catalog
    },
    {
        path: '/Cart',
        name: 'Cart',
        component: Cart,
        props: true,
    }
]
export default new Router({
    routes
});