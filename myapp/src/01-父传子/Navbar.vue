<template>
    <div>
        <button>{{ left }}</button>
        navbar-{{ computedTitle }}
        <button @click="handleRight">{{ right }}</button>
    </div>
</template>

<script>
export default {
    props: ["myTitle", "left", "right"],
    methods: {
        handleRight() {
            // console.log(this.myTitle)
            this.myTitle = "222222222"
        }
    },
    computed: {
        computedTitle() {
            return this.myTitle + "加工之后"
        }
    }
}
</script>

