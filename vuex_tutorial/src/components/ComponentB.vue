<template>
  <div class="b">
    <p>B模块：操作数据</p>
    <button @click="deal1">action增加count</button>
    <button @click="deal2">mapAction增加count</button>
    <button @click="deal3">mutation减少count</button>
    <button @click="deal4">mapMutation减少count</button>
    <button @click="deal5">action更改模块数据</button>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  name: "ComponentB",
  methods: {
    ...mapActions([
      'increment', // 可以将 this.increment 映射为 this.$store.dispatch('increment')
      'reduction'
    ]),
    ...mapMutations([
      'ADD_COUNT', // 可以将 this.ADD_COUNT 映射为this.$store.commit('ADD_COUNT')
      'DELETE_COUNT'
    ]),
    deal1() {
      this.$store.dispatch('increment')
    },
    deal2() {
      this.increment()
    },
    deal3() {
      this.$store.commit('DELETE_COUNT', 5)
    },
    deal4() {
      this.DELETE_COUNT(5)
    },
    deal5(){
      this.$store.dispatch('account/updateName', 'sw')
    }
  }
};
</script>

<style scoped>
.b {
  padding: 20px;
  margin: 10px;
  border: 1px solid black;
}
</style>
