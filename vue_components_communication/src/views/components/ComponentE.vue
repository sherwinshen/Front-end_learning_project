<template>
  <div class="e">
    <p>This is E.</p>
    <p>这是E本身的数据：{{defaultData}}</p>
    <button @click="triggerBus">触发注册在A中的事件</button>（向A传输数据）
  </div>
</template>

<script>
import Bus from "@/views/eventBus";

export default {
  name: "ComponentE",
  data() {
    return {
      defaultData: "这是E的数据"
    }
  },
  methods: {
    triggerBus(){
      Bus.$emit('getMsgOnA', 'This msg is from E.')
    }
  }
};
</script>

<style scoped>
.e {
  width: 300px;
  height: 150px;
  background: yellow;
}
</style>
