<template>
    <div>
        <Navbar v-show="show" />

        <component :is="which"></component>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import List from './List.vue'
import Detail from './Detail.vue'
import { provide, ref } from 'vue'
export default {
    components: {
        Navbar,
        List,
        Detail
    },
    setup() {
        const which = ref("List")
        const show = ref(true)
        //provide
        provide("which", which)
        provide("show", show)
        return {
            which,
            show
        }
    }
}
</script>
