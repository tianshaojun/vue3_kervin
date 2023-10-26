<template>
    <div>
        parent
        <BChild />
    </div>
</template>

<script>
import BChild from './BChild.vue';

export default {
    data() {
        return {
            title: "parent-11111"
        }
    },
    components: {
        BChild
    }
}
</script>

