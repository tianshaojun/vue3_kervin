<template>
  <div class="root">
    <Navbar @event="handleEvent"></Navbar>
    <Layout class="layout" :myshow="isShow"></Layout>
  </div>
</template>
<script>
 import Navbar from './components/Navbar.vue'
 import Layout from './components/Layout.vue'
 export default {
    data(){
      return {
        isShow:true
      }
    },
    methods:{
      handleEvent(){
        console.log("app-click")
        this.isShow = !this.isShow
      }
    },
    components:{
      Navbar,
      Layout
    }
 }
</script>

<style>
  *{
    margin:0;
    padding: 0;
  }

  .root{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .navbar{
    height: 50px;
  }

  .layout{
    flex:1;
    display: flex;
  }
</style>