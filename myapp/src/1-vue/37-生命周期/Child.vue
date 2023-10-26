<template>
    <div>
        child
    </div>
</template>

<script>
import { onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        var clearId
        onMounted(() => {
            clearId = setInterval(() => {
                console.log(111111)
            }, 1000)
        })

        onBeforeUnmount(() => {

        })

        onUnmounted(() => {
            clearInterval(clearId)
        })
    }

}
</script>
