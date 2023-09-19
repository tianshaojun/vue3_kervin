<template>
    <div>
        {{ myvalue }}
        <!-- <input type="text" v-model="myvalue"> -->
        <!-- <input type="text" :value="myvalue" @input="myvalue=$event.target.value"> -->


        <!-- <Field label="用户名" :value="myvalue" @myevent="handleEvent"/> -->
        <Field label="用户名" v-model:kerwin="myvalue" />
        <!-- <Field label=".." :kerwin="myvalue" @update:kerwin=""/> -->
        <button @click="handleRegister">注册</button>
        <button @click="handleReset">重置</button>
    </div>
</template>

<script>
import Field from './Field.vue';
export default {
    data() {
        return {
            myvalue: "aaaa"
        }
    },
    components: {
        Field
    },
    methods: {
        handleEvent(value) {
            // console.log(value)
            this.myvalue = value
        },
        // handleInput(evt){
        //     console.log(evt.target.value)
        //     this.myvalue = evt.target.value
        // }
        handleRegister() {
            console.log("register", this.myvalue)
        },
        handleReset() {
            console.log("reset")
            this.myvalue = ""
        }
    }
}
</script>

