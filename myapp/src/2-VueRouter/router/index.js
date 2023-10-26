
import { createRouter, createWebHashHistory } from 'vue-router'
import Films from '../views/Films.vue'
import Cinemas from '../views/Cinemas.vue'
import Center from '../views/Center.vue'
// import NotFound from '../views/NotFound.vue'

// import Nowplaying from '../views/films/Nowplaying.vue'
// import Comingsoon from '../views/films/Comingsoon.vue'
const routes = [
    // {
    //     path:"/",
    //     component:Films
    // },
    {
        path: "/films",
        name: "myfilms", // 命名路由
        component: Films,
        // children: [
        //     {
        //         path: "/films/nowplaying",
        //         component: Nowplaying
        //     },
        //     {
        //         path: "comingsoon",
        //         component: Comingsoon
        //     },
        //     {
        //         path: "/films",
        //         redirect: '/films/nowplaying'
        //     }
        // ]
    },


    {
        path: "/cinemas",
        component: Cinemas
    },
    {
        path: "/center",
        alias: "/wode",// 别名
        component: Center
    },
    {
        path: "/",
        redirect: "/films"
        // redirect: {
        //     name: "myfilms"
        // }
    },
    // {   path: '/:pathMatch(.*)*', 
    // {
    //     path: '/:pathMatch(.*)*',  // /aaa /bbb /ccc  /aaa/a1/a2
    //     component: NotFound
    // }
]
const router = createRouter({
    history: createWebHashHistory(), // hash  #/film #/center
    // history /film /center
    routes, // `routes: routes` 的缩写

})

export default router