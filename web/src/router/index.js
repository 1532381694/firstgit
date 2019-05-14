import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import share_out from '@/components/share_out.vue'
import whitebook from '@/components/whitebook.vue'
import supplierAllBack from '@/components/supplierAllBack.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/share_out',
      name: 'share_out',
      component: share_out
    },
    {
      path: '/whitebook',
      name: 'whitebook',
      component: whitebook
    },
    {
      path: '/supplierAllBack',
      name: 'supplierAllBack',
      component: supplierAllBack
    }
  ]
})
