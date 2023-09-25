<template>
    <div>
        app-{{ title }}
        <button @click="handleClick">改变echart宽度</button>
        <!-- <div id="main"></div> -->
        <div id="main" :style="{ width: mywidth, height: '400px' }"></div>

    </div>
</template>
<script>
// export function a(){}
// export function b(){}
// import * as kerwin from ''
// {a:function,b:function}

import * as echarts from 'echarts'
export default {
    data() {
        return {
            title: '111111',
            option: {},
            mywidth: '600px'
        }
    },
    // beforeCreate(){
    //     console.log(this.title)
    // }
    created() {
        // console.log(this.title)
        this.title = "222222"
        //初始化工作

        this.option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        }
    },
    beforeMount() {
        // console.log(document.getElementById('main'))
    },
    mounted() {
        // console.log(document.getElementById('main'))
        // 订阅发布
        // ajax
        // setInterval
        // 访问dom
        this.myChart = echarts.init(document.getElementById('main'));
        this.myChart.setOption(this.option);

    },
    methods: {
        handleClick() {
            this.mywidth = '800px'

            this.$nextTick(() => {
                console.log("nexttick")
                this.myChart.resize()
            })
        }
    },
    beforeUpdate() {
        console.log("beforeUpdate")
    },
    updated() {
        console.log("updated", document.getElementById("main").style.width)
        //     //resize()
        // this.myChart.resize() 
    }
}
</script>
