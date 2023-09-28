<template>
    <div>
        <input type="text" v-model="state.mytext">

        <select v-model="select">
            <option value="aaa">aaa</option>
            <option value="bbb">bbb</option>
            <option value="ccc">ccc</option>
        </select>
    </div>
</template>

<script>
import { ref, watch, reactive } from 'vue';

export default {
    setup() {
        // const mytext = ref("")
        const select = ref("aaa")
        //1-写法
        // watch(mytext,(newValue,oldValue)=>{
        //     console.log("同步/异步","ajax",newValue,oldValue)
        // })

        //2-写法
        // watch(()=>mytext.value,(newValue,oldValue)=>{
        //     console.log("同步/异步","ajax",newValue,oldValue)
        // })

        //3-多个数据源侦听
        // watch([mytext,select],(newValue,oldValue)=>{
        //     console.log("同步/异步","ajax",newValue,oldValue)
        // })

        // watch([mytext,select],(newValue,oldValue)=>{
        //     console.log("同步/异步","ajax",newValue,oldValue)
        // },{immediate:true})
        // deep:true

        const state = reactive({
            mytext: ""
        })

        watch(() => state.mytext, (newvalue, oldValue) => {
            console.log("ajax", newvalue, oldValue)
        })

        return {
            state,
            select
        }

    }
}
</script>
