<template>
  <div>
    <h1>方法1</h1>
    <button @click="download1">下载1</button>
    <h1>方法2</h1>
    <button @click="download2">下载2</button>
    <h1>方法3</h1>
    <button @click="download3">下载3</button>
    <h1>方法4</h1>
    <input id="file" type="file" name="file"/>
    <button @click="download4">下载4</button>
    <h1>方法5</h1>
    <input id="file2" type="file" name="file2"/>
    <button @click="download5">下载5</button>
  </div>
</template>

<script>
export default {
  name: "FileDownload",
  methods: {
    download1() {
      window.open('download_img.jpg')
    },
    download2() {
      const form = document.createElement('form');
      form.method = 'get';
      form.action = '';
      //form.action = wordURL;
      //form.target = '_blank';	// form新开页面
      document.body.appendChild(form); // form表单做出提交操作要先加入到dom树中
      form.submit();
      document.body.removeChild(form);
    },
    download3() {
      const a = document.createElement('a');
      a.href = './download_img.jpg';
      a.download = 'fileName.jpg'
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
        a.download = 'myFile.js';
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
        const a = document.createElement('a');
        a.setAttribute('href', event.target.result);
        a.download = 'myFile.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
      fileReader.readAsDataURL(file);
    }
  }
}
</script>

<style scoped>

</style>