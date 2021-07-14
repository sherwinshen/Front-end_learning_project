<template>
  <div class="download">
    <div class="box">
      <p>方法1：window.open</p>
      <button @click="download1">下载</button>
    </div>
    <div class="box">
      <p>方法2：模拟调用 form 表单的 submit（不推荐）</p>
      <button @click="download2">下载</button>
    </div>
    <div class="box">
      <p>方法3：模拟调用 a 标签的 click</p>
      <button @click="download3">下载</button>
    </div>
    <div class="box">
      <p>方法4：Blob对象下载(input标签在这里模拟后台返回文件流)</p>
      <input id="file" type="file" name="file"/>
      <button @click="download4">下载</button>
    </div>
    <div class="box">
      <p>方法5：base64(input标签在这里模拟后台返回文件流)</p>
      <input id="file2" type="file" name="file2"/>
      <button @click="download5">下载5</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Download",
  data() {
    return {
      url: 'https://i.linkeddb.com/upload/2e4d/c82a/6499c1becdc0860a94e80979.jpg?x-oss-process=image/format,webp'
    }
  },
  methods: {
    download1() {
      window.open(this.url)
    },
    download2() {
      const form = document.createElement('form');
      form.method = 'get';
      form.action = this.url;
      form.target = '_blank';	// form新开页面
      document.body.appendChild(form); // form 表单做出提交操作要先加入到 dom 树中
      form.submit();
      document.body.removeChild(form);
    },
    download3() {
      const a = document.createElement('a');
      a.href = this.url;
      a.download = 'fileName.jpg' // download 对应下载文件名，并且如果没有download属性则也会直接在浏览器预览，而不会下载
      a.click();
    },
    download4() {
      // 通过 FileReader来生成二进制文件流
      const file = document.getElementById('file').files[0]
      const fileReader = new FileReader()
      fileReader.onload = function (event) {
        // event.target.result 为二进制文件流，然后处理下载
        const blob = new Blob([event.target.result]);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'myImg.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        // console.log(event.target.result)
      }
      fileReader.readAsArrayBuffer(file);
    },
    download5() {
      // 通过 FileReader来生成二进制文件流
      const file = document.getElementById('file2').files[0]
      const fileReader = new FileReader()
      fileReader.onload = function (event) {
        // event.target.result 为 Data URL
        const a = document.createElement('a');
        a.setAttribute('href', event.target.result);
        a.download = 'myImg.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
      fileReader.readAsDataURL(file);
    }
  }
};
</script>

<style lang="scss" scoped></style>
