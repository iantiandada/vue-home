import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/views/Index.vue";
import NewsDetail from "@/views/NewsDetail.vue";



const routes = [
    {
        path: '/',
        name: 'home',
        component: Index
    },
    {
        path: '/news/:id',
        name: 'newsDetail',
        component: NewsDetail,
        props: true   // 将路由参数以 props 形式传给组件
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router