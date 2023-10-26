<template>
  <div>
    app
    <Child @event.once="handleEvent($event)" @event2="handleEvent2"/>
  </div>
</template>
<script>
import Child from './Child.vue'
export default {
  components:{
    Child
  },
  methods:{
    handleEvent(data){
      console.log("app-event",data)
    },
    handleEvent2(data){
      console.log("app-evevt2",data)
    }
  }
}
</script>
