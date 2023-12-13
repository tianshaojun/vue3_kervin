import { defineStore } from "pinia";
import axios from "axios";

const useCinemaStore = defineStore("cinema", {
    //options store

    state: () => ({
        cinemaList: []
    }),
    actions: {
        async getCinemaList() {
            // console.log("ajax",payload)

            var res = await axios({
                url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5385023",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16784170161263416169725953","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            })
            this.cinemaList = res.data.data.cinemas
        }
    },
    getters: {
        filterCinemaList(state) {
            return (type) => {
                return state.cinemaList.filter(item => item.eTicketFlag === type)
            }
        }
    }
})

export default useCinemaStore