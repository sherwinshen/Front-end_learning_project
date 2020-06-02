<template>
    <div class="component-a">
        This is way2-a.
        <button @click="click">触发注册在B的中央事件</button>
        <component-b></component-b>
    </div>
</template>

<script>
    import ComponentB from './b'
    import Bus from './eventBus'

    export default {
        name: "componentA",
        components: {ComponentB},
        mounted() {
            Bus.$on('getMsgOnA', target => {
                alert(`this event is on A. Msg: ${target}`);
            });
        },
        methods: {
            click: function () {
                Bus.$emit('getMsgOnB', 'This msg is from A.')
            }
        }
    }
</script>

<style scoped>

</style>