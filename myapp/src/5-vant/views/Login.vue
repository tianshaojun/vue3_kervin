<template>
    <div>
        <h2>login页面</h2>
        <button @click="handleLogin">登录</button>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleLogin = () => {
    localStorage.setItem("token", "kerwin")
    router.push("/")
}
</script>