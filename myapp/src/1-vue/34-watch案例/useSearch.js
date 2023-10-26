import { ref, computed } from 'vue';

function UseSearch(datalist) {
    const mytext = ref("")
    const computedList = computed(() =>
        datalist.value.filter(item => item.content.includes(mytext.value))
    )

    return {
        mytext,
        computedList
    }
}

export default UseSearch