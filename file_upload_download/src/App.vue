<template>
  <div id="app">
    <div id="nav">
      <router-link to="/upload">文件上传</router-link> | <router-link to="/download">文件下载</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {}
p {
  margin: 0;
  padding: 0;
}
.box {
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
}
</style>
