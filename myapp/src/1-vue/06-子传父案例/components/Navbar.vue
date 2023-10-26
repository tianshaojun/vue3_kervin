<template>
    <div class="navbar" >
        <button @click="handleClick">展开/折叠侧边栏</button>
        <div>vue3的单文件navbar</div>
    </div>
</template>
<script>
export default{
    
    methods:{
        handleClick(){
            this.$emit("event")
        }
    }
}
</script>
<style scoped>
  div{
    background: gray;
  }
</style>
