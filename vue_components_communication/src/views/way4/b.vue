<template>
    <div class="component-b">
        This is way4-b. {{a}}
        <component-c v-bind="$attrs" v-on="$listeners"></component-c>
    </div>
</template>

<script>
    import ComponentC from './c'

    export default {
        name: "componentB",
        components: {ComponentC},
        props: {
            a: String
        },
        mounted() {
            console.log(this.$attrs);
        }
    }
</script>

<style scoped>

</style>