<template>
    <div>
        <button @click="handleBack">返回</button>
        detail

        <h3>猜你喜欢</h3>
        <ul>
            <li @click="handleClick">电影1</li>
        </ul>
    </div>
</template>
<script>
export default {
    mounted() {
        // console.log("接受上一个页面传来的参数", this.$route.params.myid, "带着id参数请求后端接口")

        console.log("接受上一个页面传来的参数", this.$route.query.myid, "带着id参数请求后端接口")
    },
    methods: {
        handleBack() {
            this.$router.back() //返回
            // this.$router.go(-1)

            //this.$router.forward()
            //this.$router.go(1)
        },

        handleClick() {
            this.$router.push(`/detail/6789`)
        }
    },

    watch: {
        // "$route.params": function () {
        //     console.log("接受猜你喜欢传来的参数", this.$route.params.myid, "带着id参数请求后端接口")
        // }
    },

    // beforeRouteUpdate(to, from) {
    //     // console.log("beforeRouteUpdate",to)
    //     console.log("接受猜你喜欢传来的参数", to.params.myid, "带着id参数请求后端接口")
    // }

}
</script>
