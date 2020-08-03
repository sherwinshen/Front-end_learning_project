import Vue from 'vue'
import VueRouter from 'vue-router'
import FileUpload from '../views/FileUpload.vue'
import FileDownload from '../views/FileDownload.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/upload',
    name: 'FileUpload',
    component: FileUpload
  },
  {
    path: '/download',
    name: 'FileDownload',
    component: FileDownload
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
