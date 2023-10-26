<template>
  <div class="navbar">
    <slot></slot>
    <div>vue3的单文件navbar</div>
  </div>
</template>
<script>
export default {

  // methods:{
  //     handleClick(){
  //         this.$emit("event")
  //     }
  // }
}
</script>
<style scoped>
div {
  background: gray;
}
</style>
