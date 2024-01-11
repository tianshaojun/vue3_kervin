<template>
    <div>
        center
    </div>
</template>

<script>
export default {
    // async beforeRouteEnter(to, from, next) {
    //     let isAuthenticated = await localStorage.getItem("token")

    //     if (isAuthenticated) {
    //         next()
    //     } else {
    //         next({ name: "Login" })
    //     }
    // }

    beforeRouteLeave() {
        const answer = window.confirm("你确定要离开吗？")

        

        if (!answer) return false
    }
}
</script>
