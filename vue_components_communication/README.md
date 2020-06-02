# Vue组件通讯

> 简介： 本文描述了vue中使用的几种组件通讯方法
>
> 本文作者：[EnvisionShen](https://github.com/MrEnvision)     创建日期：2020-06-01
>
> 参考链接：[手把手撸码前端 - 组件通讯完整版](https://www.bilibili.com/video/BV1FE411V71c)



**组件关系：**

- 父子组件：A与B、B与C、B与D、C与E、D与E

- 子孙组件：A与D、B与E

- 兄弟组件：C与D

- 隔代组件：A与E

<img src="./组件.png">

方法1：父、子组件通讯 props、emit、.sync

```vue
// 下面的“属性名”和“方法名”要一一对应
// 父组件.vue
<template>
    <B :属性名.sync="myData“ @方法名=“myFunc” />
</template>
<script>
  import {reactive} from '@vue/composition-api'
  export default {
    setup(props) {
      const myData = reactive({})
      myFunc = (number) => {}
      return {myData, myFunc}
    }
}
</script>

// 子组件.vue
<template>
    <div>{{ data }}</div>
</template>
<script>
export default {
    props: {
        属性名: {
            type: String,
            default: ""
        }
    },
    setup(){
        emit(“方法名”, 100) // 回调父组件的方法
        emit(“update:属性名”, 111111)
    }
}
</script>
```

方法2：中央事件总线 - 各级组件之间均可通讯

```js
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

方法3：Vuex

> 略，详见vuex部分。

方法4：$attrs、$listeners

- $attrs从外层组件传到内部组件

> 举例：A组件嵌套B，B组件嵌套C；A传递属性到B，B可以通过this.$attrs获取，并且要继续传递给下一层，就需要在下一层组件上绑定`v-on='$attrs'`，注意如果B中通过props接收相同名称的属性， this.$attrs此时以及后续都不能读取到该名称属性。$listeners传递方法同理。

方法5：provide、inject - 跨级组件间的通信

```js
// 祖先组件中通过provider来提供变量，然后在子孙组件中通过inject来注入变量
// 父组件
provide("customVal", "我是父组件向子组件传递的值");
// 子组件
inject("customVal"); // 通过this.customVal获取
```

方法6：$parent、$children

> 略，感觉较少用。



------

如果发现本项目有内容上的错误，欢迎提交 issues 进行指正，相关合作请邮件<a href="mailto:EnvisionShen@gmail.com">EnvisionShen@gmail.com</a>联系