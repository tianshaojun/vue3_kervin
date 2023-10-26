<template>
    <div>
        <input type="text" v-model="state.mytext">
        <button @click="handleClick()">add</button>
        <ul>
            <li v-for="(data, index) in state.datalist" :key="data">
                {{ data }}
                <button @click="handleDelClick(index)">del</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const state = reactive({
            mytext: "",
            datalist: ["111", "222", "333"]
        })

        // const text = reactive("") new Proxy("") 不可用

        const handleClick = () => {
            state.datalist.push(state.mytext)
            //清空
            state.mytext = ""
        }
        const handleDelClick = (index) => {
            // console.log(index)
            state.datalist.splice(index, 1)
        }

        return {
            state,
            handleClick,
            handleDelClick
        }
    }
}
</script>
