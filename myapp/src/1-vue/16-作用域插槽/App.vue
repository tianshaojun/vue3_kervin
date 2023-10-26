<template>
    <div>
        <input type="text" v-model="text">
        <Nowplaying v-slot:movie="{ mylist }">
            <ul>
                <li v-for="data in mylist" :key="data.id">
                    <img :src="data.img" style="width:100px;" />
                    <div v-if="data.nm.includes(text) && text != ''"
                        style="color:red;background-color: yellow;font-size:30px">
                        {{ data.nm }}
                    </div>
                    <div v-else>
                        {{ data.nm }}
                    </div>
                </li>
            </ul>

        </Nowplaying>
    </div>
</template>

<script>
import Nowplaying from './Nowplaying.vue';
export default {
    data() {
        return {
            text: ""
        }
    },
    components: {
        Nowplaying
    }
}
</script>
