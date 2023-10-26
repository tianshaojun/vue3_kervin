<template>
    <div>
        <slot :mylist="datalist" a="1" b="2" name="movie">
            <ul>
                <li v-for="item in datalist" :key="item.id">
                    {{ item.nm }}
                </li>
            </ul>
        </slot>

        <slot></slot>
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
    mounted() {
        // console.log("mounted")
        // fetch("test.json").then(res=>res.json())
        // .then(res=>{
        //     console.log(res)
        // })

        axios.get("test.json").then(res => {
            console.log(res.data.data.hot)
            this.datalist = res.data.data.hot
        })
    }
}
</script>

