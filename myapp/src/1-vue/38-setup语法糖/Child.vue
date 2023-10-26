<template>
    <div>
        <button>返回</button>
        {{ title }}
        <button @click="handleHome">首页</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    title: {
        type: String,
        default: "000000"
    }
})

const emit = defineEmits(["right"])
const handleHome = () => {
    emit("right", "来自子组件的问候")
}
// console.log(props.title)
</script>
