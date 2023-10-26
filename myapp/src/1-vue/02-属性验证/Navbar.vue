<template>
    <div>
        <button v-show="leftshow">{{ left }}</button>
        navbar-{{ myTitle }}
        <button v-show="rightshow">{{ right }}</button>
    </div>
</template>

<script>
export default {
    // props:["myTitle","left","right","leftshow","rightshow"]
    props: {
        myTitle: String,
        left: [String, Number],
        right: {
            required: true,
            //验证
            validator(value) {
                // console.log(value);
                return ['success', 'warning', 'danger'].includes(value);
            }
        },
        leftshow: {
            // required:true,
            type: Boolean,
            default: true
        },
        rightshow: {
            type: Boolean,
            default: true
        }
    }
}
</script>

