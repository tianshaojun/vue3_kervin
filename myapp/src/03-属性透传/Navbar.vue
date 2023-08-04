<template>
    <!-- <NavbarChild/> -->
    <div>
        navbar
        <button v-bind="$attrs">test</button>
    </div>
</template>
<script>
import NavbarChild from './NavbarChild.vue';

export default {
    inheritAttrs: false, //禁止透传
    components: {
        NavbarChild
    }
}
</script>
