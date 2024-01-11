<template>
    <div>
        <ul>
            <!-- <router-link custom :to="'/detail/' + item.filmId" v-slot="{ navigate }" v-for="item in datalist"
                :key="item.filmId">
                <li @click="navigate">
                    {{ item.name }}
                </li>
            </router-link> -->

            <li v-for="item in datalist" :key="item.filmId" @click="handleClick(item.filmId)">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            datalist: []
        }
    },
    async mounted() {
        const res = await axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6151240",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16784170161263416169725953","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        })

        this.datalist = res.data.data.films

        console.log(this.datalist)
    },

    methods: {
        handleClick(id) {
            // console.log(id)

            // location.href="#/detail"

            //vca区别

            //第一种写法 -路径+路由参数
            // this.$router.push(`/detail/${id}`)

            //第二种写法 -路径+路由参数 对象写法
            // this.$router.push({
            //     name: "Detail",
            //     params: {
            //         myid: id
            //     }
            // })

            //第二种  -路径+query  query传参

            this.$router.push({
                path: '/detail',
                query: {
                    myid: id
                }
            })


            // /detail?myid=6262

        }
    }
}

</script>

<style scoped lang="scss">
ul {
    li {
        padding: 10px;
    }
}
</style>
