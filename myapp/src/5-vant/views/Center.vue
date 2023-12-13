<template>
    <div>
        center
        <van-button type="primary" @click="handleClick">主要按钮</van-button>
        <van-button type="danger" size="mini" :disabled="true" :loading="true">危险按钮</van-button>
    </div>
</template>

<!-- <script>
export default {
    async beforeRouteEnter(to,from,next){
        let isAuthenticated = await localStorage.getItem("token")

        if(isAuthenticated){
            //this
            next()
        }else{
            next({name:"Login"})
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
// import {Button} from 'vant'
// console.log(Button.name)
export default {
    // components:{
    //     [Button.name]:Button
    // },
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
    },
    methods: {
        handleClick() {
            console.log("click")
        }
    }
}
</script>

<script setup>

import { Button as vanButton } from 'vant'  //export {Button}
</script>
