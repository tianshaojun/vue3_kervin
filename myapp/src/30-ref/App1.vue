<template>
    <div>
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
import { ref } from 'vue';

export default {
    setup() {
        const mytext = ref("")
        const datalist = ref(["111", "222", "333"])

        const handleClick = () => {
            datalist.value.push(mytext.value)
            //清空
            mytext.value = ""
        }
        const handleDelClick = (index) => {
            // console.log(index)
            datalist.value.splice(index, 1)
        }

        return {
            mytext,
            datalist,
            handleClick,
            handleDelClick
        }
    }
}
</script>
