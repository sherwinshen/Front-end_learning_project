# Vue 组件通讯

> 简介： 本文描述了vue中使用的几种组件通讯方法，参考资料：[「Vue 通信六种方式」](https://segmentfault.com/a/1190000019208626)。

## 1. 组件关系

<img src="./noteImg/组件.png" alt="">

- 父子组件：A 与 B、B 与 C、B 与 D、C 与 E、D 与 E

- 子孙组件：A 与 D、B 与 E

- 兄弟组件：C 与 D

- 隔代组件：A 与 E

## 2. 组件通讯

| 方法                       | 父子通信 | 兄弟通信 | 跨级通信 |
| -------------------------- | :------: | :------: | :------: |
| props/emit/sync            |    ☑️     |    ✖️     |    ✖️     |
| Vuex（工程项目最常用方式） |    ☑️     |    ☑️     |    ☑️     |
| 中央事件总线 Bus           |    ☑️     |    ☑️     |    ☑️     |
| $attrs/$listeners          |    ☑️     |    ✖️     |    ☑️     |
| provide/inject             |    ☑️     |    ✖️     |    ☑️     |
| $ref/$parent/$children     |    ☑️     |    ✖️     |    ✖️     |

### 2.1 props/emit/sync

父组件向子组件传值：props

```vue
<!-- 父组件 -->
<template>
  <child :msg='myMsg'></child>
</template>
<script>
import Child from "./components/Child"
export default {
  components:{ Child },
  data(){
    return{
      myMsg: 'hello child'
    }
  }
}
</script>


<!-- 子组件 -->
<template>
  <div>{{ myMsg }}</div>
</template>
<script>
export default {
  props: {
    myMsg: { // hello child
      type: String,
      default: ''
    }
  }
}
</script>
```

子组件向父组件传值：绑定事件 + emit

```vue
<!-- 父组件 -->
<template>
  <child @getMsg='updateMsg'></child>
</template>
<script>
import Child from "./components/Child"
export default {
  components:{ Child },
  methods: {
    updateMsg: (val) => {
      console.log(val) // hello parent
    }
  }
}
</script>


<!-- 子组件 -->
<template>
  <button @click='onClick'>点击</button>
</template>
<script>
export default {
  methods: {
    onClick: () => {
      this.$emit('getMsg', 'hello parent')
    }
  }
}
</script>
```

通过 sync 使得子组件更新父组件属性

```vue
<!-- 父组件 -->
<template>
  <child :msg.sync='myMsg'></child>
</template>
<script>
import Child from "./components/Child"
export default {
  components:{ Child },
  data(){
    return{
      myMsg: 'hello child'
    }
  }
}
</script>


<!-- 子组件 -->
<template>
  <button @click='onClick'>点击</button>
</template>
<script>
export default {
  methods: {
    onClick: () => {
      this.$emit('update:myMsg', 'hello parent')
    }
  }
}
</script>
```

### 2.2 Vuex

这是最常用的方式，具体详见[「官方文档」](https://vuex.vuejs.org/zh/)和[「项目工程」](https://github.com/MrEnvision/Front-end_learning_project/tree/master/vuex_tutorial)。

### 2.3 中央事件总线 Bus

```javascript
// bus.js - 创建实例
import Vue from 'vue';
export default new Vue();

// 调用事件
import Bus from 'bus.js'
Bus.$emit('getTarget', 'hello world!');

// 注册事件
import Bus from 'bus.js'
Bus.$on('getTarget', target => {  
    console.log(target);  
}); 
```

### 2.4 $attrs/$listeners

A组件嵌套B，B组件嵌套C；A传递属性到B，B可以通过this.$attrs获取，并且要继续传递给下一层，就需要在下一层组件上绑定`v-on='$attrs'`，注意如果B中通过props接收相同名称的属性， this.$attrs此时以及后续都不能读取到该名称属性。$listeners传递方法与$attrs传递属性同理。

### 2.5 provide/inject

祖先组件中通过provider来提供变量，然后在子孙组件中通过inject来注入变量。**provide 和 inject 绑定并不是可响应的**，provide与inject 实现数据响应式可详见[「Vue 通信六种方式」](https://segmentfault.com/a/1190000019208626)（Vue.observable 优化响应式 provide）。

```javascript
export default {
  provide: {
    name: 'hello'
  }
}
```

```javascript
// B.vue
export default {
  inject: ['name'], // 通过this.name获取
  mounted () {
    console.log(this.name);  // hello
  }
}
```

### 2.6 $ref/$parent/$children

对组件进行`ref`命名，则可以通过`this.$refs.名字`来获取并调用其相应的方法和获取相应的数据，而`this.$parent`和`this.$children`同样能够获取完整的vue组件信息。



------

项目内容有错误或存在侵权，请提交 issues 进行指正，合作请邮件 <a href="mailto:EnvisionShen@gmail.com">EnvisionShen@gmail.com </a>联系。
