import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Share from '@/components/Share'
import parent from '@/components/parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Share',
      component: Share
    },
    {
      path: '/ppp',
      component: parent
    }
  ]
})
