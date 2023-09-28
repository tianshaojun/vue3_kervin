<template>
    <div>
        app

        {{ obj.myname }}
        {{ computedName }}
    </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {

    setup() {
        const obj = reactive({
            myname: "kerwin"
        })

        const computedName = computed(() => obj.myname.substring(0, 1).toUpperCase() + obj.myname.substring(1))

        return {
            obj,
            computedName
        }
    }
}
</script>
