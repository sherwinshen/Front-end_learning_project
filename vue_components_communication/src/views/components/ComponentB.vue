<template>
  <div class="b">
    <p>This is B.</p>
    <p>这是A传递来的数据props：{{propsData}}</p>
    <p>这是A传递来的数据sync：{{syncData}}</p>
    <p>a在props拦截后，B组件的$attrs： {{$attrs}}</p>
    <button @click="sendData">向A发送数据</button>
    <button @click="updateData">向A同步更新sync数据</button>
    <ComponentC v-bind="$attrs"></ComponentC>
    <ComponentD></ComponentD>
  </div>
</template>

<script>
import ComponentC from "@/views/components/ComponentC";
import ComponentD from "@/views/components/ComponentD";

export default {
  name: "ComponentB",
  components: {
    ComponentC,
    ComponentD
  },
  props: {
    propsData: {
      type: String,
      default: ''
    },
    syncData: {
      type: String,
      default: ''
    },
    a: String // a 被拦截，不能再通过$attrs传递到后面的组件中
  },
  methods: {
    sendData() {
      this.$emit('getData', '我是从B发送的数据')
    },
    updateData() {
      this.$emit('update:syncData', '我是从B更新过的sync数据')
    }
  }
};
</script>

<style scoped>
.b {
  width: 600px;
  height: 700px;
  background: pink;
}
</style>
