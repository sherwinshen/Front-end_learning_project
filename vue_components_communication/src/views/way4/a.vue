<template>
    <div class="component-a">
        This is way4-a.
        <component-b a="aaa" b="bbb" c="ccc" v-on:show="show"></component-b>
    </div>
</template>

<script>
    import ComponentB from './b'

    export default {
        name: "componentA",
        components: {ComponentB},
        methods: {
            show: function (val) {
                alert(val)
            }
        }
    }
</script>

<style scoped>

</style>