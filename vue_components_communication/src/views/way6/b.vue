<template>
    <div class="component-b">
        This is way6-b.
    </div>
</template>

<script>
    export default {
        name: "componentB",
        mounted() {
            console.log('parent', this.$parent)
        }
    }
</script>

<style scoped>

</style>