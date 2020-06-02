import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/way1',
        name: 'Way1',
        component: () => import('../views/way1/a')
    }, {
        path: '/way2',
        name: 'Way2',
        component: () => import('../views/way2/a')
    }, {
        path: '/way3',
        name: 'Way3',
        component: () => import('../views/way3/a')
    },{
        path: '/way4',
        name: 'Way4',
        component: () => import('../views/way4/a')
    },{
        path: '/way5',
        name: 'Way5',
        component: () => import('../views/way5/a')
    },{
        path: '/way6',
        name: 'Way6',
        component: () => import('../views/way6/a')
    },
]

const router = new VueRouter({
    routes
})

export default router
