import {createRouter, createWebHistory} from 'vue-router'
import CalculatorView from '../views/CalculatorView.vue'
import FormView from "@/views/FormView.vue";

const routes = [
    {
        path: '/',
        name: 'CalculatorView',
        component: CalculatorView
    },
    {
        path: '/form',
        name: 'FormView',
        component: FormView
    }
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
    })

export default router
