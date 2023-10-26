<template>
    <div>
        <!-- 插槽-路由容器 -->
        <router-view></router-view>

        <!-- <Tabbar></Tabbar> -->
    </div>
</template>

<script>
// import Tabbar from './components/Tabbar.vue'
export default {
    components: {
        // Tabbar
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
