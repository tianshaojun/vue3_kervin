<template>
    <div>
        app
        {{ state.myname }}
        {{ state.myage }}
        {{ state.mylocation }}

        <button @click="handleCLick">click</button>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup() {
        const mylocation = ref("dalian")
        const state = reactive({
            myname: "kerwin",
            myage: 100,
            mylocation
        })
        const handleCLick = () => {
            state.myname = "xiaoming"

            // mylocation.value ="beijing"

            state.mylocation = "beijing"
        }

        return {
            handleCLick,
            state
        }
    }
}
</script>
