<template>
    <div>
        <Navbar :my-title="title" left="返回" right="success" :leftshow="false"></Navbar>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    data() {
        return {
            title: "首页状态",
        }
    },
    components: {
        Navbar
    }
}
</script>

