<template>
    <div class="component-b">
        This is way3-b.
        <button @click="click">更改vuex中的数据</button>
    </div>
</template>

<script>
    export default {
        name: "componentB",
        methods: {
            click: function () {
                this.$store.commit('UPDATE_MSG', 'This msg is from B.')
            }
        }
    }
</script>

<style scoped>

</style>