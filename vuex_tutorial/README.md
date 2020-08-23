# vuex指南

> 简介：vuex状态管理基本用法
>
> 本文作者：[EnvisionShen](https://github.com/MrEnvision)
>
> 创建日期：2020-02-25
>



## Step1

> 创建store文件夹及index.js文件，引入vuex以及创建Vuex.Store实例保存到变量store中，最后使用export default导出store

```javascript
// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex);

// 创建vuex实例
const store = new Vuex.Store({});

// 导出store
export default store;
```

## Step2

> 在main.js文件中引入store/index.js文件，在文件里面添加 import store from ‘./store’;，再在vue实例全局引入store对象

```javascript
// main.js

import store from './store'

/* eslint-disable no-new */
new Vue({
  store // 新添加
})
```

## Step3

> 在Vuex.Store实例中编写vuex业务代码 —— 具体参看代码中注释说明

- state - vuex中的数据源，用于数据保存，页面通过 this.$store.state来获取我们定义的数据
- getters - Getters可以用于监听state中的值的变化，返回计算后的结果
- mutations - 用户修改store中的值唯一的方法就是提交mutation来修改
- actions - 对mutations修改值外面套了一层，修改store里面的值，先去提交一个actions，在actions中提交mutation再去修改状态值

## Step4

> 页面文件中使用vuex

- 获取数据 -  this.$store.state
- 修改数据 - this.$store.commit('mutation中function')
- 修改数据(改进) - this.$store.dispatch('action中function')，即通过actions来实现操作

> mapState、mapGetters、mapActions 写法可以避免`this.$stroe.state.count`和`this.$store.dispatch('funName')`这种长写法。

```javascript
...mapState({
	count: state => state.count // this.count就是this.$store.state
})
...mapActions([
	'addFun' // 可以将this.addFun映射为this.$store.dispatch('addFun')
])
...mapGetters([
	'addFun' // 可以将this.addFun映射为this.$store.commit('addFun')
])
```

注意命名空间的情况：

```js
// app为命名空间
...mapGetters(‘app’, [‘isCollapse’]),  // 命名空间
...mapGetters([‘isCollapse’]),  // 非命名空间
...mapGetters(‘app’, {  // 重命名
  'aaa': 'isCollapse'
}),
```

## 其他

模块化：[Vuex 模块化使用](https://segmentfault.com/a/1190000019924674)

<img src='./vuex_module.jpg'>

```js
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

## 总结

```javascript
// 存储
const store = new Vuex.store({
  state: {
    count: 0
  },
  getter: {
    nowCount(state){
      return `当前数量${state.count}`
    }
  },
  actions: {
    increment (context) {
      context.commit('addCount', 5)
    }
  },
  mutations: {
    addCount(state, n){
      state.count += n
    }
  }
})

// 使用 - 单独
this.$store.state.count
this.$store.dispach('increment')
this.$store.commit('addCount', 5)
this.$store.getters.nowCount

// 使用 - map
computed: {
  ...mapState({
    count: state => state.count // this.count 就是 this.$store.state
  }),
  ...mapState([
    'nowCount'
  ])
}

methods: {
  ...mapActions([
    'addFun' // 可以将 this.addFun 映射为 this.$store.dispatch('addFun')
  ]),
  ...mapMutations([
    'addFun' // 可以将 this.addFun 映射为this.$store.commit('addFun')
  ])
}

// 上述如果需要重命名则不能用数组的形式，用对像即可，举例：
...mapActions({
  addOne: 'addFun' // 可以使用 this.addOne() 映射到 this.$store.dispatch('addFun')
})
```

参考教程： 

1、[Vuex 到底是个什么鬼](https://www.jianshu.com/p/120eaf50331c)

2、[Vuex旗下的State和Getter](https://www.jianshu.com/p/946df1834963)

3、[Vuex旗下的Mutation](https://www.jianshu.com/p/64727454f151)

4、[Vuex旗下的Action](https://www.jianshu.com/p/7238d4d42725)

5、[Vuex的小帮手](https://www.jianshu.com/p/c9b8bbaca875)

6、[Vuex的管理员Module](https://www.jianshu.com/p/83d5677b0928)

------

如果发现本项目有内容上的错误，欢迎提交 issues 进行指正，相关合作请邮件<a href="mailto:EnvisionShen@gmail.com">EnvisionShen@gmail.com</a>联系