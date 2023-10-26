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
import { reactive } from 'vue';

//自定义的hooks
import useSearch from './search'

export default {
    setup() {
        const state = reactive({
            datalist: []
        })

        setTimeout(() => {
            state.datalist = ["aaa", "aab", "abc", "bbc", "bcd", "aef", "bdf", "cde"]
        }, 2000)

        return {
            ...useSearch(state)
        }
    }
}
</script>

