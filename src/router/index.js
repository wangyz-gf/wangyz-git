import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film.vue'
import Center from '@/views/Center.vue'
import Cinema from '@/views/Cinema.vue'

Vue.use(VueRouter)

const routes=[
    {
        path:'/film',
        component:Film
    },
    {
        path:'/center',
        component:Center
    },
    {
        path:'/cinema',
        component:Cinema
    },
]

const router=new VueRouter({
    routes
})

export default router