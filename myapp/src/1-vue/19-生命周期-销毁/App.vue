<template>
    <div>
        app-<button @click="isCreated = !isCreated">click</button>
        <!-- <Child v-if="isCreated" /> -->

        <MyChart v-if="isCreated" />
    </div>
</template>

<script>
import Child from './Child.vue'
import MyChart from './MyChart.vue';
export default {
    data() {
        return {
            isCreated: true
        }
    },
    mounted() {
        console.log('app-mounted')
    },
    components: {
        Child,
        MyChart
    }
}
</script>

