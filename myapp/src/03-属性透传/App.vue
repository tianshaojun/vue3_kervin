<template>
    <div>
        <Navbar class="navbar" id="navbarid" style="background-color: yellow;" @click="handleClick()"></Navbar>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    components: {
        Navbar
    },
    methods: {
        handleClick() {
            console.log("app-11111")
        }
    }

}
</script>

