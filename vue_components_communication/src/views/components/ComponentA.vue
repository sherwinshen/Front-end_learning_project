<template>
  <div class="a">
    <p>This is A.</p>
    <p>这是A中的sync数据：{{syncData}}</p>
    <p>这是B发送给A的数据：{{childData}}</p>
    <p>这是A在B组件上绑定数据： { "a": "aaa", "b": "bbb", "c": "ccc" }</p>
    <p>A提供了provide数据：{ 'name': 'sherwin'}</p>
    <button @click="triggerBus">触发注册在C中的事件</button>（向C传输数据）
    <ComponentB :propsData="propsData" :syncData.sync="syncData" @getData="showData" a="aaa" b="bbb" c="ccc"></ComponentB>
  </div>
</template>

<script>
import Bus from '@/views/eventBus'
import ComponentB from "@/views/components/ComponentB";

export default {
  name: "ComponentA",
  components: {ComponentB},
  data() {
    return {
      propsData: 'A传递给B的数据props',
      syncData: 'A传递给B的数据sync',
      childData: ''
    }
  },
  provide() {
    return {
      name: 'sherwin'
    }
  },
  mounted() {
    Bus.$on('getMsgOnA', target => {
      alert(`this event is on A. Msg: ${target}`);
    });
  },
  methods: {
    showData(data) {
      this.childData = data
    },
    triggerBus(){
      Bus.$emit('getMsgOnC', 'This msg is from A.')
    }
  }
};
</script>

<style scoped>
.a{
  width: 800px;
  height: 900px;
  background: darkseagreen;
}
</style>
