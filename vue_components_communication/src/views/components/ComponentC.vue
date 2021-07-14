<template>
  <div class="c">
    <p>This is C.</p>
    <p>C获取自E的数据：{{childData}}</p>
    <p>C在B中绑定了$attrs后，其$attrs为：{{$attrs}}</p>
    <button @click="getData">获取E中的数据</button>
    <ComponentE ref="com_e"></ComponentE>
  </div>
</template>

<script>
import Bus from "@/views/eventBus";
import ComponentE from "@/views/components/ComponentE";

export default {
  name: "ComponentC",
  components: {ComponentE},
  data(){
    return {
      childData: '',
    }
  },
  mounted() {
    Bus.$on('getMsgOnC', target => {
      alert(`this event is on C. Msg: ${target}`);
    });
  },
  methods: {
    getData() {
      this.childData = this.$refs.com_e.defaultData
      console.log(this.$children, this.$parent)
    }
  }
};
</script>

<style scoped>
.c{
  width: 450px;
  height: 300px;
  background: olivedrab;
}
</style>
