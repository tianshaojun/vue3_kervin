<template>
    <div>
        <Navbar title="首页" :left="true" @leftevent="handleLeft" />
        <Navbar title="影院" :left="false" ref="mynav" />
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import { ref } from 'vue'
export default {
    components: {
        Navbar
    },

    setup() {
        const mynav = ref(null)
        const handleLeft = (value) => {
            console.log("left button ", value)

            // console.log(mynav.value)
        }

        return {
            handleLeft,
            mynav
        }
    }
}
</script>
