import Vue from 'vue'
import Router from 'vue-router'
import Share from '@/components/Share'
import parent from '@/components/parent'
import contentMain from '../components/content/sourceRight/Vmain'
import contentMore from '../components/content/sourceRight/VsourceMore'
import contentSearch from '../components/content/sourceRight/Vsearch'
import notFound404 from '../components/notFound404'
import count from '../components/Vcount'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Share,
      children:[
          {path:'/', name:'main', component:contentMain},
          {path:'/sourceMore/:sourceMoreValue', name:'sourceMore', component:contentMore},
          {path:'/sourceSearch/', name:'sourceSearch', component:contentSearch},
      ],
    },
    {
      path:'*',
      component:notFound404,
    },
    {
      path:'/count',
      component:count,
    },
  ]
})
