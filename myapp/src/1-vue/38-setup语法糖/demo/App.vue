<template>
    <div>
        <Navbar v-show="show" v-kerwin-dir />

        <component :is="which?List:Detail"></component>
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue'
import List from './List.vue'
import Detail from './Detail.vue'
import { provide, ref } from 'vue'
const which = ref(true)
const show = ref(true)
//provide
provide("which", which)
provide("show", show)

//局部指令
const vKerwinDir = (el) => {
    //console.log(el)
    el.style.background = "yellow"
}
</script>
