import Vue from "vue";
import CustomersList from './components/CustomersList.vue'
import TrainingsList from './components/TrainingsList.vue'

const routes = [
        {
            path: "/customerslist",
            component: CustomersList,
        },
        {
            path: "/trainingslist",
            component: TrainingsList,
        }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

const app = new Vue({
    router
}).$mount('#app')