<template>
    <div>
        <!-- app-<button @click="handleClick()">click</button>
        <input ref="myinput" />
        <div ref="mydiv">aaa</div>
        <Child ref="mychild" /> -->


        <Field label="用户名" type="text" ref="username"></Field>
        <Field label="密码" type="password" ref="password"></Field>
        <Field label="年龄" type="number" ref="age"></Field>

        <div>
            <button @click="handleRegister">注册</button>
            <button @click="handleReset">重置</button>
        </div>
    </div>
</template>

<script>
import Child from './Child.vue';
import Field from './Field.vue';

export default {
    components: {
        Child,
        Field
    },
    methods: {
        handleClick() {
            console.log(this.$refs.mychild.childtitle)
            // this.$refs.mydiv.style.background = "red";

            this.$refs.mychild.childtitle = "22222"
        },

        handleRegister() {
            console.log(this.$refs.username.myvalue, this.$refs.password.myvalue, this.$refs.age.myvalue)
        },
        handleReset() {
            // console.log(this.$refs.username.myvalue,this.$refs.password.myvalue,this.$refs.age.myvalue)

            this.$refs.username.myvalue = ""
            this.$refs.password.myvalue = ""
            this.$refs.age.myvalue = ""
        }
    }
}
</script>

