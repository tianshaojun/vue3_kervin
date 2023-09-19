<template>
    <div style="background-color: yellow;">

        <label>{{ label }}</label>:
        <input :type="type" :value="kerwin" @input="handleInput">
    </div>
</template>

<script>
export default {
    data() {
        return {
            myvalue: ""
        }
    },
    methods: {
        handleInput(evt) {
            // console.log(evt.target.value)

            this.$emit("update:kerwin", evt.target.value)
        }
    },
    props: {
        label: {
            type: String,
            default: ""
        },
        kerwin: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "text"
        }
    }
}
</script>
