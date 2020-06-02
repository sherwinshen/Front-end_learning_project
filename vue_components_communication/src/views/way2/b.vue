<template>
    <div class="component-b">
        This is way2-b.
        <button @click="click">触发注册在A的中央事件</button>
    </div>
</template>

<script>
    import Bus from './eventBus'

    export default {
        name: "componentB",
        mounted() {
            Bus.$on('getMsgOnB', target => {
                alert(`this event is on B. Msg: ${target}`);
            });
        },
        methods: {
            click: function () {
                Bus.$emit('getMsgOnA', 'This msg is from B.')
            }
        }
    }
</script>

<style scoped>

</style>