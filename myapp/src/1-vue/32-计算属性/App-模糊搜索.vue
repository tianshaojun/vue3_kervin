<template>
    <div>
        <input type="text" v-model="mytext">

        <ul>
            <li v-for="data in computedList" :key="data">
                {{ data }}
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue';

export default {
    setup() {
        const state = reactive({
            mytext: "",
            datalist: ["aaa", "aab", "abc", "bbc", "bcd", "aef", "bdf", "cde"]
        })

        const computedList = computed(() =>
            state.datalist.filter(item => item.includes(state.mytext))
        )
        return {
            computedList,
            ...toRefs(state)
        }
    }
}
</script>

