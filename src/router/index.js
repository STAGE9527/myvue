import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Loging.vue'
import store from '@src/store'
// import { nextTick } from 'q';
Vue.use(Router)

const routes = require.context('./routes', true, /\.js$/)


let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/userinfo',
            children: [
                {
                    path: '/userinfo',
                    name: 'userinfo',
                    meta: {
                        title: '账号信息'
                    },
                    component: () => import('../views/UserInfo.vue')
                },
                {
                    path: '/password',
                    name: 'password',
                    meta: {
                        title: '修改密码'
                    },
                    component: () => import('../views/Password.vue')
                },

            ].concat(routes.keys().map( name => routes(name).default))
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Loging.vue')
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    if(to.path == '/login') {
        next() 
    } else {
        if(store.state['admin-api-token']) {
            next()
        } else {
            next('/login')
        }
    }
})
export default router;
