<template>
    <div>
        app

        <div>{{ obj.myname }}</div>
        <div>{{ obj.myage }}</div>

        <button @click="handleClick">click</button>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        //函数
        // console.log("setup")

        const obj = reactive({
            myname: "kerwin",
            myage: 100
        })//响应式对象

        const handleClick = () => {
            // console.log("click")
            obj.myname = "xiaoming"
            obj.myage = 18
        }

        return {
            obj,
            handleClick
        }
    }
}
</script>
