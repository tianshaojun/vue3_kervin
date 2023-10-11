<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data" @click="handleClick">
                {{ data }}</li>
        </ul>
    </div>
</template>

<script>
import { inject, ref } from 'vue'
export default {
    setup() {
        const datalist = ref(["aaa", "bbb", "ccc"])
        const which = inject("which")
        // const show = inject("show")
        const handleClick = () => {
            //让父组件的which 改成  Detail

            which.value = "Detail"
            // show.value = false
        }

        return {
            datalist,
            handleClick
        }

    }
}
</script>
