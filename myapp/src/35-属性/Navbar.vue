<template>
    <div>
        <button v-show="left" @click="handleClick">返回</button>
        {{ computedTitle }}
        <button>首页</button>
    </div>
</template>

<script>
import { computed, getCurrentInstance } from 'vue'

export default {
    // props:["title"],
    props: {
        title: String,
        left: Boolean
    },

    setup({ title }, { emit }) {
        // console.log(props)

        const _this = getCurrentInstance()

        const computedTitle = computed(() => title + "-11111")
        const handleClick = () => {
            // console.log("click",_this.parent)
            // console.log("click",_this.root)

            emit("leftevent", "来自孩子的问候")
        }
        return {
            computedTitle,
            handleClick
        }
    }
}
</script>
