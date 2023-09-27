<template>
    <div>
        app
        {{ myname }}

        <input type="text" ref="myinput">
        <button @click="handleClick">click</button>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        //ref(基本类型)
        const myname = ref("kerwin") //new Proxy({value:"kerwin"})

        const myinput = ref(null)
        const handleClick = () => {
            // console.log()
            myname.value = "xiaomnig"

            console.log(myinput.value.value)
        }
        return {
            myinput,
            myname,
            handleClick
        }
    }
}
</script>

