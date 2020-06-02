<template>
    <div class="component-b">
        This is way5-b. {{this.val}}
    </div>
</template>

<script>
    export default {
        name: "componentB",
        inject: ['val']
    }
</script>

<style scoped>

</style>