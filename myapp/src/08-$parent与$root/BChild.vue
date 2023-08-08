<template>
    <div>
        child-<button @click="handeClick">click</button>
    </div>
</template>
<script>
export default {
    methods: {
        handeClick() {
            console.log(this.$parent.title)
            console.log(this.$parent.$parent.title)
            console.log(this.$root.title)
        }
    }
}
</script>
