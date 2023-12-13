import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";
import useCityStore from "./cityStore";

//引用另一个store
const cityStore = useCityStore()

const useCinemaStore = defineStore("cinema", () => {
    const cinemaList = ref([])
    const getCinemaList = async () => {

        var res = await axios({
            url: `https://m.maizuo.com/gateway?cityId=${cityStore.cityId}&ticketFlag=1&k=5385023`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16784170161263416169725953","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        })
        cinemaList.value = res.data.data.cinemas
    }

    const filterCinemaList = computed(() =>
        (type) => {
            return cinemaList.value.filter(item => item.eTicketFlag === type)
        }
    )

    const clearCinemaList = ()=>{
        cinemaList.value = []
    }
    return {
        cinemaList,
        getCinemaList,
        clearCinemaList,
        filterCinemaList
    }
})


export default useCinemaStore