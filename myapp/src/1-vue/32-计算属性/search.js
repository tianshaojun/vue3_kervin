import { ref, computed } from 'vue';

function UseSearch(state) {
    const mytext = ref("")
    const computedList = computed(() =>
        state.datalist.filter(item => item.includes(mytext.value))
    )

    return {
        mytext,
        computedList
    }
}

export default UseSearch