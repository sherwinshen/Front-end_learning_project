<template>
    <div class="component-a">
        This is way3-a.
        watch监听：{{msg}}
        直接监听：{{this.$store.state.msg}}
        <component-b></component-b>
    </div>
</template>

<script>
    import ComponentB from './b'

    export default {
        name: "componentA",
        components: {ComponentB},
        watch: {
            '$store.state.msg': function (val) {
                this.msg = val
            }
        },
        data() {
            return {
                msg: ''
            }
        }
    }
</script>

<style scoped>

</style>