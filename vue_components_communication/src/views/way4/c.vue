<template>
    <div class="component-c" >
        This is way3-c.
    </div>
</template>

<script>
    export default {
        name: "componentC",
        created() {
            console.log(this.$attrs)
            console.log(this.$listeners)
            this.$emit('show', 'this msg is from c.')
        }
    }
</script>

<style scoped>

</style>