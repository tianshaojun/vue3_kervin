<template>
    <div>
        <Navbar :my-title="title" left="返回" right="首页"></Navbar>
        <!-- <Navbar v-bind="{
                'my-title':'电影',
                'left':'返回',
                'right':'首页'
        }"></Navbar> -->

        <!-- <Navbar v-bind="propobj"></Navbar> -->
        <!-- <Navbar my-title="影院"></Navbar>
            <Navbar my-title="我的"></Navbar> -->

        <button @click="handleClick">click</button>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    data() {
        return {
            title: "首页状态",
            propobj: {
                'my-title': '电影1',
                'left': '返回',
                'right': '首页'
            }
        }
    },
    methods: {
        handleClick() {
            this.title = "首页状态-11111"
        }
    },
    components: {
        Navbar
    }
}
</script>

