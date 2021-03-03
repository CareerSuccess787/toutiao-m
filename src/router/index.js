import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// 删除原有路由。配置自有路由表
const routes = []

const router = new VueRouter({
    routes
})

export default router