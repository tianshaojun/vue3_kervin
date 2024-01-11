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

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const datalist = ref([])
const router = useRouter()
onMounted(async () => {
    const res = await axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6151240",
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16784170161263416169725953","bc":"110100"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    })
    datalist.value = res.data.data.films
})

const handleClick = (id) => {
    router.push(`/detail/${id}`)
}
</script>

<style scoped lang="scss">
ul {
    li {
        padding: 10px;
    }
}
</style>
