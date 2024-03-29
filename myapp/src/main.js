import { createApp } from 'vue'
// import './style.css'

// import App from './App.vue'
// import App from './01-父传子/App.vue'
// import App from './02-属性验证/App.vue'
// import App from './03-属性透传/App.vue'
// import App from './04-属性透传案例/App.vue'
// import App from './05-子传父/App.vue'
// import App from './06-子传父案例/App.vue'
// import App from './07-$refs/App.vue'
// import App from './08-$parent与$root/App.vue'
// import App from './08-$parent与$root/demo/App.vue'
// import App from './09-provide&inject/App.vue'
// import App from './10-订阅发布/App.vue'
// import App from './11-动态组件/App.vue'
// import App from './12-组件v-model/App.vue'
// import App from './13-异步组件/App.vue'
// import App from './14-插槽/App.vue'
// import App from './14-插槽/demo/App.vue'
// import App from './15-具名插槽/App.vue'
// import App from './16-作用域插槽/App.vue'
// import App from './17-生命周期-创建/App.vue'
// import App from './18-生命周期-更新/App.vue'
// import App from './19-生命周期-销毁/App.vue'
// import App from './20-swiper与vue/App.vue'


// import App from './28-vca/App.vue'
// import App from './29-reactive/App.vue'
// import App from './30-ref/App.vue'
// import App from './30-ref/App1.vue'
// import App from './31-toRefs/App.vue'
// import App from './31-toRefs/App1.vue'
// import App from './32-计算属性/App.vue'
// import App from './32-计算属性/App-模糊搜索.vue'
// import App from './32-计算属性/App-复用逻辑-自定义hooks.vue'
// import App from './33-watch/App.vue'
// import App from './34-watch案例/App.vue'
// import App from './35-属性/App.vue'
// import App from './36-provide与inject/App.vue'
// import App from './37-生命周期/App.vue'
// import App from './38-setup语法糖/App.vue'
// import App from './38-setup语法糖/demo/App.vue'


//vue-router相关
import router from './2-VueRouter/router'
import App from './2-VueRouter/App.vue'



var app = createApp(App)
app.use(router)  //注册路由插件
app.mount('#app')
