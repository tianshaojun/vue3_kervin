<template>
    <div>
        app
        <Child>
            <div>我是在app组件中的一段html代码</div>
            <div>我是在app组件中的一段html代码</div>
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
