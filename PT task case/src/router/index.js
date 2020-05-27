import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CustomersList from '../views/CustomersList.vue'
import TrainingsList from '../views/TrainingsList.vue'
import Calendar from '../views/Calendar.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/customerslist',
        name: 'CustomersList',
        component: CustomersList
    },
    {
        path: '/trainingslist',
        name: 'TrainingsList',
        component: TrainingsList
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
