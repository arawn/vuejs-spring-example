import Dashboard from "./pages/DashboardPage.vue.js"
import NotFoundPage from "./pages/NotFoundPage.vue.js"
import App from './App.vue.js'

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.prototype.$http = axios

axios.defaults.timeout = 2000
axios.defaults.withCredentials = true

const router = new VueRouter({
    routes: [{
        path: '/',
        component: Dashboard,
        meta: {}
    },{
        path: '/not-found',
        component: NotFoundPage,
        meta: {}
    },{
        path: '*',
        redirect: '/',
        meta: {}
    }]
})
const vuetify = new Vuetify({
    theme: {
        dark: true
    },
    icons: {
        iconfont: 'mdi',
    },
})

new Vue({
    render: h => h(App), router, vuetify
}).$mount(`#app`)