<template>
    <div class="component-a">
        This is way5-a.
        <component-b></component-b>
    </div>
</template>

<script>
    import ComponentB from './b'

    export default {
        name: "componentA",
        components: {ComponentB},
        provide() {
            return {
                'val': '我是父组件向子组件传递的值'
            }
        }
    }
</script>

<style scoped>

</style>