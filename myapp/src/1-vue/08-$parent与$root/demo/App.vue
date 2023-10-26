<template>
  <div class="root">
    <Navbar class="navbar"></Navbar>
    <Layout class="layout" ref="layout"></Layout>
  </div>
</template>
<script>
 import Navbar from './components/Navbar.vue'
 import Layout from './components/Layout.vue'
 export default {
    data(){
      return {
        title:"app"
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