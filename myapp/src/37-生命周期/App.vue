<template>
    <div>
        app-{{ a }}
        <button @click="handleClick">click</button>

        <Child v-if="isCreated" />
    </div>
</template>

<script>
import { ref, onBeforeMount, onBeforeUpdate, onMounted, onUpdated, nextTick } from 'vue';
import Child from './Child.vue'
export default {
    components: {
        Child
    },
    setup() {
        const a = ref("11111")
        const isCreated = ref(true)

        onBeforeMount(() => {
            console.log("dom创建之前调用111")
        })

        onMounted(() => {
            console.log("订阅，ajax, dom创建后 swiper，echart初始化111")
        })

        onBeforeUpdate(() => {
            console.log("更新之前")
        })

        onUpdated(() => {
            console.log("更新之后")
        })

        const handleClick = () => {
            a.value = "22222"

            nextTick(() => {
                console.log("nextick")
            })
        }

        return {
            a,
            isCreated,
            handleClick
        }
    }
}
</script>
