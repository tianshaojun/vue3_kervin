<template>
    <div>
        child
    </div>
</template>

<script>
export default {
    mounted() {
        window.onresize = () => {
            console.log("resize")
        }
        console.log("child-mounted")
    },

    beforeUnmount() {
        console.log("beforeUnmount")
    },

    unmounted() {
        console.log("unmounted")

        window.onresize = null
    }
}
</script>
