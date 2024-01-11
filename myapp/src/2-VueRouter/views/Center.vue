<template>
    <div>
        center
    </div>
</template>

<!-- <script>
export default {
    async beforeRouteEnter(to, from, next) {
        let isAuthenticated = await localStorage.getItem("token")

        if (isAuthenticated) {
            //this
            next()
        } else {
            next({ name: "Login" })
        }
    }

}
</script>

<script setup>

import { onBeforeRouteLeave } from 'vue-router'

onBeforeRouteLeave(() => {
    const answer = window.confirm("你确定要离开吗？")

    if (!answer) return false
})
</script> -->



<script>
import { onBeforeRouteLeave } from 'vue-router'

export default {

    setup() {
        onBeforeRouteLeave(() => {
            const answer = window.confirm("你确定要离开吗？")

            if (!answer) return false
        })
    },
    async beforeRouteEnter(to, from, next) {
        let isAuthenticated = await localStorage.getItem("token")

        if (isAuthenticated) {
            //this
            next()
        } else {
            next({ name: "Login" })
        }
    }
}
</script>