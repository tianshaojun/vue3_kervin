<template>
    <div>
        <Sidebar v-if="myshow"></Sidebar>
        <Content></Content>
    </div>
</template>
<script>
import Content from './Content.vue'
import Sidebar from './Sidebar.vue'
export default {
    props: ["myshow"],
    components: {
        Content,
        Sidebar
    }
}
</script>
