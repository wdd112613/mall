import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () =>
    import ('@/views/home/Home')
const User = () =>
    import ('@/views/user/User')
const Sort = () =>
    import ('@/views/sort/Sort')
const Cart = () =>
    import ('@/views/cart/Cart')
const Detail = () =>
    import ('@/views/detail/Detail')

const routes = [
    { path: '', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/user', component: User },
    { path: '/sort', component: Sort },
    { path: '/cart', component: Cart },
    { path: '/detail', component: Detail }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router