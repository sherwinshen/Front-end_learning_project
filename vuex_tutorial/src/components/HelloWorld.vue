<template>
  <div class="">
    <p>页面上获取的值: {{count}}</p>
    <p>getters获取的值: {{this.$store.getters.getStateCount}}</p>
    <div>
    </div>
    <button @click="add">增加</button>
    <div>
      <label>
        <input type="text" value="" v-on:keyup="inputRef"/>
      </label>
      <button @click="reduction">减少</button>
    </div>

  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        reductionNum: 0
      }
    },
    computed: {
      ...mapState({
        count: state => state.count
      })
    },
    methods: {
      ...mapActions([
        'addFun', // 可以将this.addFun映射为this.$store.dispatch('addFun')
        'reductionFun'
      ]),
      // count添加
      add() {
        // this.$store.dispatch('addFun')
        this.addFun() // 如果使用...mapActions后
      },
      // input添加监听事件，更改减少的值
      inputRef(e) {
        this.reductionNum = e.target.value
      },
      // count减少reductionNum值
      reduction() {
        // this.$store.dispatch('reductionFun', this.reductionNum)
        this.reductionFun(this.reductionNum) // 如果使用...mapActions后
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
