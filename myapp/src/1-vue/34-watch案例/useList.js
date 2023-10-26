import { ref, watch, watchEffect } from 'vue'
import axios from 'axios'

function useList() {
    const select = ref("kerwin")
    const list = ref([])

    // watch(select, async (value) => {
    //     // console.log(value)
    //     var res = await axios.get(`http://localhost:3000/news?author=${value}`)

    //     console.log(res.data)
    //     list.value = res.data
    // }, { immediate: true })

    watchEffect(async () => {
        // console.log(value)
        var res = await axios.get(`http://localhost:3000/news?author=${select.value}`)
        console.log(res.data)
        list.value = res.data
    })

    return {
        select,
        list
    }
}

export default useList