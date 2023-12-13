import { defineStore } from 'pinia'

//第一个参数是唯一storeId
const useTabbarStore = defineStore("tabbar", {
    //option Store 
    state: () => ({
        isTabbarShow: true
    }),

    actions: {
        change(value) {
            this.isTabbarShow = value
        }
    }
    // getters
    // actions
})

export default useTabbarStore