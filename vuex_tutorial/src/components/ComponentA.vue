<template>
  <div class="a">
    <p>A模块：显示数据</p>
    <p>count: {{count}}</p>
    <p>account模块name: {{name}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "ComponentA",
  computed: {
    name() {
      return this.$store.state.account.name
    },
    ...mapState({
      count: state => state.count // this.count 就是 this.$store.state
    }),
  },
  watch: {
    count(newVal, oldVal){
      alert(`count更改：${oldVal}->${newVal}`)
    },
    name(newVal, oldVal){
      alert(`account/name更改：${oldVal}->${newVal}`)
    }
    // "$store.state.account.name"(newVal, oldVal){
    //   alert(`account/name更改：${oldVal}->${newVal}`)
    // }
  }
};
</script>

<style scoped>
.a {
  padding: 20px;
  margin: 10px;
  border: 1px solid black;
}
</style>
