<template>
    <div>
        app-{{ msg }}
        <button @click="handleClick">click</button>
        <div>
            {{ myname }} --{{ myage }}
        </div>

        <div>
            {{ computedName }}
        </div>

        <Child title="电影" @right="handleRight"></Child>
    </div>
</template>

<script setup>
import { ref, reactive, toRefs, computed } from 'vue'

import Child from './Child.vue'

const msg = ref("hello world")

const state = reactive({
    myname: "kerwin",
    myage: 100
})

const { myname, myage } = { ...toRefs(state) }

const handleClick = () => {
    // console.log(msg)
    msg.value = "hello kerwin"

    myname.value = "xiaoming"
}

const computedName = computed(() => myname.value.substring(0, 1).toUpperCase() + myname.value.substring(1))


const handleRight = (value) => {
    console.log("app", value)
}
</script>
