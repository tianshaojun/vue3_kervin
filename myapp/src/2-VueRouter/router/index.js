import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Films from '../views/Films.vue'
import Cinemas from '../views/Cinemas.vue'
import Center from '../views/Center.vue'
import NotFound from '../views/NotFound.vue'

import Nowplaying from '../views/films/Nowplaying.vue'
import Comingsoon from '../views/films/Comingsoon.vue'

import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'

const routes = [
    // {
    //     path:"/",
    //     component:Films
    // },
    {
        path: "/films",
        name: "myfilms", //命名路由
        component: Films,
        children: [
            {
                path: "/films/nowplaying",
                component: Nowplaying
            },
            {
                path: "comingsoon",
                component: Comingsoon
            },
            {
                path: "/films",
                redirect: '/films/nowplaying'
            }
        ]
    },
    {
        path: "/cinemas",
        component: Cinemas
    },
    {
        path: "/center",
        alias: "/wode", //别名
        component: Center,
        meta: {
            requiredAuth: true
        }
    },
    //配置detail
    // {
    //     name: "Detail",
    //     path: '/detail/:myid', // /detail/456
    //     component: Detail
    // },
    {
        path: '/detail',
        component: Detail
    },
    {
        name: "Login",
        path: "/login",
        component: Login
    },
    {
        path: "/",
        redirect: "/films"
        // redirect: {
        //     name: "myfilms"
        // }
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

// router.beforeEach(async (to, from, next) => {
//     let isAuthenticated = await localStorage.getItem("token")

//     // console.log(to.fullPath);

//     if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//     else next()

// })

router.beforeEach(async (to, from, next) => {
    let isAuthenticated = await localStorage.getItem("token")

    if (to.name !== 'Login' && !isAuthenticated && to.meta.requiredAuth) next({ name: 'Login' })
    else next()

})


router.afterEach((to, from) => {
    console.log("提交后端用户行为信息")
})

export default router