<template>
  <div class="upload">
    <div class="box">
      <p>方法1：通过 Form 表单 action 提交</p>
      <form method="post" action="接口地址" enctype="multipart/form-data">
        <input type="file" name="file" />
        <button type="submit">提交</button>
      </form>
    </div>
    <div class="box">
      <p>方法2：获取 file 对象，再将其以 formData 形式发送请求</p>
      <input id="file" type="file" name="file" />
      <button type="submit" @click="upload">提交</button>
    </div>
    <div class="box">
      <p>方法3：分片上传，具体详见 README.md</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upload",
  methods: {
    upload() {
      const file = document.getElementById('file').files[0]
      const formData = new FormData()
      formData.append('file', file)
      const data = {
        file: formData
      }
      // 将 data 通过 axios、fetch、ajax 等发送即可
      console.log(data)
    }
  }
};
</script>

<style scoped>
</style>
