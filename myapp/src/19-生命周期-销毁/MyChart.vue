<template>
    <div>
        <div id="main" style="width: 100%;height:400px;"></div>
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
            option: {}
        }
    },

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

        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(this.option);
        window.onresize = () => {
            console.log("resize")
            myChart.resize()
        }
    },
    unmounted() {
        console.log("unmounted")

        window.onresize = null
    }
}
</script>
