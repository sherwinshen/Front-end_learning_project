# Vuex 使用指南

> 简介：Vuex状态管理基本用法，参考资料：
>
> 1. [「Vuex 到底是个什么鬼」](https://www.jianshu.com/p/120eaf50331c)
> 2. [「Vuex旗下的State和Getter」](https://www.jianshu.com/p/946df1834963)
> 3. [「Vuex旗下的Mutation」](https://www.jianshu.com/p/64727454f151)
> 4. [「Vuex旗下的Action」](https://www.jianshu.com/p/7238d4d42725)
> 5. [「Vuex的小帮手」](https://www.jianshu.com/p/c9b8bbaca875)
> 6. [「Vuex的管理员Module」](https://www.jianshu.com/p/83d5677b0928)

## 1. 基础使用

Vuex元素

- state - vuex中的数据源，用于数据保存，页面通过 this.$store.state来获取我们定义的数据
- getters - Getters可以用于监听state中的值的变化，返回计算后的结果
- mutations - 用户修改store中的值唯一的方法就是提交mutation来修改
- actions - 对mutations修改值外面套了一层，修改store里面的值，先去提交一个actions，在actions中提交mutation再去修改状态值

Vuex使用

- 获取数据 -  this.$store.state
- 修改数据 - this.$store.commit('mutation中function')
- 修改数据 - this.$store.dispatch('action中function')，即通过actions来实现操作

注意，mapState、mapGetters、mapActions 写法可以避免`this.$stroe.state.count`和`this.$store.dispatch('funName')`这种长写法。

```javascript
computed: {
  ...mapState({
    count: state => state.count // this.count就是this.$store.state
  })
},
methods: {
  ...mapActions([
    'addFun' // 可以将this.addFun映射为this.$store.dispatch('addFun')
  ]),
    ...mapGetters([
    'addFun' // 可以将this.addFun映射为this.$store.commit('addFun')
  ])
}
```

## 2. 模块化

> 参考资料：[Vuex 模块化使用](https://segmentfault.com/a/1190000019924674)

<img src='./noteImg/vuex_module.jpg'>

```javascript
// store/modules/login.js
const state = {}
const mutations = {}
const actions = {}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
```

```javascript
export default new Vuex.Store({
  modules:{
    login,
    info,
    user
  }
})

// 模块化后使用可以添加模块名
this.$store.state.moduleA.name;
// getter，mutation，action 他们默认都是注册在全局命名空间的，我们可以模块导出的时候加个 namespaced: true 使其成为带命名空间的模块，然后就可以通过模块名访问了，具体详见参考资料
this.$store.getters['moduleA/fullName']; 
this.$store.dispatch('moduleA/ASYNC_SET_NAME', { name: "JJ" }); 
```

## 3. 数据更改监听

如果 Vuex 中 state 的数据未通过 computed 进行转换，则直接监听：

```javascript
watch: {
  "$store.state.account.name"(newVal, oldVal){
    alert(`account/name更改：${oldVal}->${newVal}`)
  }
}
```

如果 Vuex 中 state 的数据通过 computed 或 mapState 进行转换，则监听转换后的数据：

```javascript
export default {
  computed: {
    ...mapState({
      count: state => state.count // this.count 就是 this.$store.state
    }),
    name() {
      return this.$store.state.account.name
    },
  },
  watch: {
    count(newVal, oldVal){
      alert(`count更改：${oldVal}->${newVal}`)
    },
    name(newVal, oldVal){
      alert(`account/name更改：${oldVal}->${newVal}`)
    }
  }
}
```

## 4. 总结

```javascript
// vuex
import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account
  },
  state: {
    count: 0
  },
  mutations: {
    ADD_COUNT(state, value){
      state.count += value
    },
    DELETE_COUNT(state, value){
      state.count -= value
    }
  },
  actions: {
    increment (context) {
      context.commit('ADD_COUNT', 5)
    },
    reduction (context) {
      context.commit('DELETE_COUNT', 5)
    }
  },
})


// 使用 - 单独
this.$store.state.count
this.$store.dispatch('increment')
this.$store.commit('DELETE_COUNT', 5)

// 使用 - map
computed: {
  ...mapState({
    count: state => state.count // this.count 就是 this.$store.state
  }),
}

methods: {
  ...mapActions([
    'increment', // 可以将 this.increment 映射为 this.$store.dispatch('increment')
    'reduction'
  ]),
  ...mapMutations([
    'ADD_COUNT', // 可以将 this.ADD_COUNT 映射为this.$store.commit('ADD_COUNT')
    'DELETE_COUNT'
  ]),
}

// 上述如果需要重命名则不能用数组的形式，用对像即可，举例：
...mapActions({
  add: 'increment' // 可以使用 this.add() 映射到 this.$store.dispatch('increment')
})
```

------

如果发现本项目有内容上的错误或侵犯相关权益，欢迎提交 issues 进行指正，相关合作请邮件 <a href="mailto:EnvisionShen@gmail.com">EnvisionShen@gmail.com </a>联系。

