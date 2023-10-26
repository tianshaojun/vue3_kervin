
<template>
    <div>
        <Navbar />

        <!-- <Home v-if="which==='首页'"/>
        <List v-else-if="which==='列表'"/>
        <Center v-else/> -->

        <!-- 内置的动态组件 -->
        <!-- <keep-alive>
            <component :is="which"/>
        </keep-alive> -->

        <!-- <KeepAlive include="home,list">
            <component :is="which"/>
        </KeepAlive> -->

        <!-- <KeepAlive :include="/home|list/">
            <component :is="which"/>
        </KeepAlive> -->

        <!-- <KeepAlive :include="['home','list']">
            <component :is="which"/>
        </KeepAlive> -->

        <KeepAlive :exclude="['home', 'list']">
            <component :is="which" />
        </KeepAlive>

        <Tabbar />
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Tabbar from './Tabbar.vue';
import Home from './views/Home.vue'
import List from './views/List.vue'
import Center from './views/Center.vue'
import store from './store';
export default {
    data() {
        return {
            navTitle: "首页",
            which: "Home"
        }
    },
    provide() {
        return {
            navTitle: this.navTitle,
            app: this
        }
    },
    mounted() {
        var obj = {
            "首页": "Home",
            "列表": "List",
            "我的": "Center"
        }
        store.subscribe((value) => {
            //列表  List
            //首页  Home
            //我的  Center
            this.which = obj[value]
        })
    },
    components: {
        Navbar,
        Tabbar,
        Home,
        List,
        Center
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}

ul {
    list-style: none;
}
</style>
