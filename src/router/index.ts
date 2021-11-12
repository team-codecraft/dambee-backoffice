import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SignIn from '../views/signIn.vue'
import commonRouter from './common'
import DefaultLayout from '../layouts/default/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'SignIn',
        component: SignIn
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
        path: '/',
        component: DefaultLayout,
        children: [
            ...commonRouter
        ]
    },
]
console.log(routes)
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
