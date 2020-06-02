<template>
    <div class="component-a">
        This is way1-a. {{syncData}}
        <component-b :syncData.sync="syncData" :sendData="sendData" @myFunc="showMsg"></component-b>
    </div>
</template>

<script>
    import ComponentB from './b'

    export default {
        name: "componentA",
        components: {ComponentB},
        data() {
            return {
                syncData: 'This is syncMsg in A.',
                sendData: 'This sendMsg is from A.',
            }
        },
        methods: {
            showMsg: function (val) {
                alert(val)

            }
        }
    }
</script>

<style scoped>

</style>