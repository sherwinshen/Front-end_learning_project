<template>
  <div>
    <h1>方法1</h1>
    <form method="post" action="接口地址" enctype="multipart/form-data">
      选择文件:<input type="file" name="file_2"/>
      <button type="submit">提交</button>
    </form>

    <h1>方法2</h1>
    <input id="file2" type="file" name="file_2"/>
    <button @click="submitFile">提交</button>
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  data() {
    return {}
  },
  methods: {
    submitFile() {
      const file = document.getElementById('file2').files[0]
      const formData = new FormData()
      formData.append('file', file)
      const data = {
        file: formData
      }
      console.log('data', data)
      // 将 data 通过 axios、fetch、ajax 等发送即可
      // ......
      const fileReader = new FileReader()
      fileReader.onload = function(event) {
        console.log(event.target.result)
      }
      fileReader.readAsArrayBuffer(file);
    }
  }
}
</script>

<style scoped>

</style>