<template>
    <div>
        <button>返回</button>
        <!-- <span>{{navTitle}}</span> -->
        <span>{{title}}</span>
        <button>首页</button>
    </div>
</template>
<script>
import store from './store'

export default {
    // inject:["navTitle","app"]
    
    //生命周期-mounted()
    data(){
        return {
            title:"首页"
        }
    },
    mounted(){
        //订阅，，，，
        store.subscribe((value)=>{
            console.log("我被触发了",value)
            this.title = value
        })
    }
}
</script>
<style scoped>
div{
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    background:gray
}
</style>


