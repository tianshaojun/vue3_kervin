import { ref, watch } from 'vue'
import axios from 'axios'

function useList() {
    const select = ref("kerwin")
    const list = ref([])

    watch(select, async (value) => {
        // console.log(value)
        var res = await axios.get(`http://localhost:3000/news?author=${value}`)

        console.log(res.data)
        list.value = res.data
    }, { immediate: true })

    return {
        select,
        list
    }
}

export default useList