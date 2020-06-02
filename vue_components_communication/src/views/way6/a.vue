<template>
    <div class="component-a">
        This is way6-a.
        <component-b></component-b>
    </div>
</template>

<script>
    import ComponentB from './b'

    export default {
        name: "componentA",
        components: {ComponentB},
        mounted() {
            console.log('children', this.$children)
        }
    }
</script>

<style scoped>

</style>