<template>
  <div class="d">
    <p>This is D.</p>
    <p>D未在B中绑定$attrs，其$attrs为：{{$attrs}}</p>
    <p>获取A中provide的数据name：{{name}}</p>
    <ComponentE></ComponentE>
  </div>
</template>

<script>
import ComponentE from "@/views/components/ComponentE";

export default {
  name: "ComponentD",
  components: {ComponentE},
  inject: {
    name: {
      default: () => ({})
    }
  }
};
</script>

<style scoped>
.d{
  width: 450px;
  height: 250px;
  background: cadetblue;
}
</style>
