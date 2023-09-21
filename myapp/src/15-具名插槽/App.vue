<template>
    <div>
        app
        <Child>
            <template #left>
                <span><i>图标</i>-返回</span>
            </template>
            <!-- <template v-slot> -->
            <span><b>标题</b></span>
            <!-- </template> -->
            <template #right>
                <span><i>图标</i>-首页</span>
            </template>
        </Child>
    </div>
</template>

<script>
import Child from './Child.vue'
export default {
    components: {
        Child
    }
}
</script>
