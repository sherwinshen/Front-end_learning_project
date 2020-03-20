# MEVN Stack Tutorial

> 简介： 全栈MEVN技术栈使用指南([MongoDB](http://www.mongodb.org/) + [Express.js](http://expressjs.com/) + [VueJS](https://vuejs.org/) + [Node.js](http://nodejs.org/))
>
> 本文作者：[EnvisionShen](https://github.com/MrEnvision)
>
> 创建日期：2019-01-15
>
> 参考链接: Build full stack web apps with MEVN Stack -[Part1](https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0)+[Part2](https://medium.com/@anaida07/mevn-stack-application-part-2-2-9ebcf8a22753)



##  MEVN Stack

> The acronym “MEVN” stands for “[MongoDB](http://www.mongodb.org/) + [Express.js](http://expressjs.com/) + [VueJS](https://vuejs.org/) + [Node.js](http://nodejs.org/)”. In this post, I am going to show how to create a basic MEVN (MongoDB/Express/VueJS/Node.js) Stack application.



### 1、客户端 - VueJS+跨域访问

```shell
# 全局安装vue-cli，通过vue-cli来自动化构建初始项目
npm install -g vue-cli
# 创建初始项目my-project
$ vue init webpack my-project
# 进入文件
$ cd my-project
# 安装axios - 用于客户端与服务端连接
$ npm install axios --save
# 运行客户端 - 默认打开 http://localhost:8080/
$ npm run dev
```

项目主要通过路由`/src/router/index.js`来进行数据传递(比如网页跳转，数据请求等)，路由主要由路径对应组件构成，其中组件在`/src/compents`中构建，并在`/src/router/index.js`中import导入使用，举例如下：

```javascript
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'

Vue.use(Router);

export default new Router({
  mode: 'history', // 如果不加则访问地址为http://localhost:8080/#/posts
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
```

`/src/compents`中的组件主要为vue的相关语法，举例如下：

```vue
// Posts.vue
<template>
  <div class="posts">
    This file will list all the posts.
  </div>
</template>

<script>
export default {
  name: 'posts',
  data () {
    return {}
  }
}
</script>
```

axios主要用于跨域访问（即前后端分离），在`/src`目录下创建`services`文件夹，`services`文件夹下创建`Api.js`文件，指定跨域的地址，内容如下：

```javascript
import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
```

以及创建`PostsService.js`文件，声明跨域访问api中的地址的一些方法，该方法在客户端中调用，举例如下：

```javascript
import Api from '@/services/Api'

export default {
  fetchPosts() {
    return Api().get('posts')
  },

  addPost(params) {
    return Api().post('posts', params)
  },

  updatePost(params) {
    return Api().put('posts/' + params.id, params)
  },

  getPost(params) {
    return Api().get('post/' + params.id)
  },

  deletePost(id) {
    return Api().delete('posts/' + id)
  }
}
```

### 2、服务端 - Node.js+Express.js

```shell
# 创建项目文件
$ mkdir my-project
# 进入文件
$ cd my-project
# 初始化项目 - 创建package.json文件
$ npm init -f
# 安装nodemon - 避免每次更新都需要手动终止并重新启动服务器
$ npm install --save nodemon
# 安装express依赖
$ npm install express --save
# 安装一些其他依赖，可根据需求
$ npm install --save body-parser cors morgan
# 启动服务端
$ npm start
```

创建`src/app.js`文件，并且在`package.json`文件中`scripts`添加`start`命令，如下所示：

```json
"scripts": {
    "start": "./node_modules/nodemon/bin/nodemon.js src/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

安装express依赖后，更新`src/app.js`文件，如下所示：

```javascript
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

app.listen(process.env.PORT || 8081) // 监听8081端口
```

### 3、数据库 - MongoDB+Mongoose

> 数据库的相关内容在服务端进行操作，首先需要安装mongodb数据库，并启动数据库。

```shell
# 安装mongoose
$ npm install mongoose --save
```

在`src/app.js`文件中引入mongoose

```javascript
// 引入mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/posts', {useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
    if (err) {
        console.log('Connection Error:' + err)
    } else {
        console.log('Connection success!')
    }
});
```

添加`models`文件夹，以及创建schema`post.js`，举例如下：

```javascript
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    description: String
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
```

在`src/app.js`文件中引入该schema：

```javascript
const Post = require("../models/post");
```

在`src/app.js`文件中完成各类操作，举例如下：

```javascript
// Fetch all posts
app.get('/posts', (req, res) => {
    Post.find({}, 'title description', function (error, posts) {
        if (error) {
            console.error(error);
        }
        res.send({
            posts: posts
        })
    }).sort({_id: -1})
});
```

ExpressJS存在的methods详见[express api](http://www.expressjs.com.cn/4x/api.html)

- app.all(path, callback [, callback ...])
- app.delete(path, callback [, callback ...])
- app.get(path, callback [, callback ...])
- app.post(path, callback [, callback ...])
- app.put(path, callback [, callback ...])
- app.use([path,] callback [, callback...])
- ......

具体mongoose数据库操作详见[mongoose中文网](http://www.mongoosejs.net)





------

如果发现本项目有内容上的错误，欢迎提交 issues 进行指正，相关合作请邮件<a href="mailto:EnvisionShen@gmail.com">EnvisionShen@gmail.com</a>联系