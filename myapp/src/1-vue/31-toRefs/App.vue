<template>
    <div>
        {{ mytext }}
        <input type="text" v-model="mytext">
        <button @click="handleClick()">add</button>
        <ul>
            <li v-for="(data, index) in datalist" :key="data">
                {{ data }}
                <button @click="handleDelClick(index)">del</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
    setup() {
        // var obj1 = {a:1,b:2}
        // var obj2 = {c:3}

        // var obj = {...obj1,...obj2}
        // console.log(obj)

        const state = reactive({
            mytext: "aaa",
            datalist: ["111", "222", "333"]
        })


        console.log(toRefs(state))

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
            // mytext:toRef(state,"mytext"),
            ...toRefs(state),
            state,
            handleClick,
            handleDelClick
        }
    }
}
</script>
