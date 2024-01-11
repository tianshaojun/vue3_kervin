<template>
    <div>
        <h2>login页面</h2>
        <button @click="handleLogin">登录</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleLogin() {
            localStorage.setItem("token", "aaaaaaa")

            this.$router.push("/")
        }
    }
}
</script>
