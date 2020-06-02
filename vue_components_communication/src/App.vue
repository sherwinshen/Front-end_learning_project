<template>
    <div id="app">
        <div class="link-list">
            <router-link to="/way1">1、父子组件通讯props、emit、.sync</router-link>
            <router-link to="/way2">2、中央总线通讯</router-link>
            <router-link to="/way3">3、Vuex</router-link>
            <router-link to="/way4">4、$attrs、$listeners</router-link>
            <router-link to="/way5">5、provide、inject</router-link>
            <router-link to="/way6">6、$parent、$children</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<style>
    .link-list {
        margin: 30px 0;
    }

    .link-list a {
        display: inline-block;
        margin: 0 20px;
    }

    .component-a {
        width: 800px;
        height: 500px;
        background: antiquewhite;
    }

    .component-b {
        width: 700px;
        height: 400px;
        background: cadetblue;
    }

    .component-c {
        width: 600px;
        height: 300px;
        background: coral;
    }
</style>
