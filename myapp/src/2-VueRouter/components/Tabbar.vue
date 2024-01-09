<template>
    <div class="tabbar">
        <ul>

            <!-- <li>
                <router-link to="/films" active-class="kerwinactive">电影</router-link>
            </li>
            <li>
                <router-link to="/cinemas" active-class="kerwinactive">影院</router-link>
            </li>
            <li>
                <router-link to="/center" active-class="kerwinactive">我的</router-link>
            </li> -->

            <!-- 定制router-link为我们指定的节点 -->

            <router-link custom to="/films" v-slot="{ isActive, navigate }">
                <li :class="isActive ? 'kerwinactive' : ''" @click="navigate">电影</li>
            </router-link>

            <router-link custom to="/cinemas" v-slot="{ isActive, navigate }">
                <li :class="isActive ? 'kerwinactive' : ''" @click="navigate">影院</li>
            </router-link>

            <router-link custom to="/center" v-slot="{ isActive, navigate }">
                <li :class="isActive ? 'kerwinactive' : ''" @click="navigate">我的</li>
            </router-link>

        </ul>
    </div>
</template>

<style scoped lang="scss">
.kerwinactive {
    color: red;
}

.tabbar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;

    ul {
        display: flex;

        li {
            flex: 1;
        }
    }
}
</style>

