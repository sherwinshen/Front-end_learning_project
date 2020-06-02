<template>
    <div class="component-b">
        This is way1-b.
        {{this.$props.syncData}}
        {{this.$props.sendData}}
        <button @click="sendMsg">传递信息给父组件</button>
    </div>
</template>

<script>
    export default {
        name: "componentB",
        props: {
            syncData: {
                type: String,
                default: ""
            },
            sendData: {
                type: String,
                default: ""
            }
        },
        data() {
            return {}
        },
        methods: {
            sendMsg: function () {
                this.$emit('update:syncData', 'This msg is from B.')
                this.$emit('myFunc', 'This msg is from B-func.')
            }
        }
    }
</script>

<style scoped>

</style>