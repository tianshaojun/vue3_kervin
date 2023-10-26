<template>
    <div class="navbar">
        <button @click="handleClick" v-bind="$attrs">展开/折叠侧边栏</button>
        <div>vue3的单文件navbar</div>
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
    methods: {
        handleClick() {
            console.log("navbar-click")
        }
    }
}
</script>
<style scoped>
div {
    background: gray;
}
</style>
