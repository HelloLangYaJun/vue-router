import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../components/index'
import Detail from '../components/detail'
import Login from '../components/login'
import One from '../components/detailOne'
import Two from '../components/detailTwo'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)

const router =new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: HelloWorld},
    {path: '/index', name: 'Index', component: Index, props: { name: 'attrs' },meta: {title: '首页'}},
    {path: '/detail', name: 'Detail', component: Detail, children:[
        {path:'one', component:One},
        {path:'two', component:Two}
      ],meta: {
        title: '详情'
      }
    },
    {path: '/login', name: 'Login', component: Login,meta: {
        title: '登陆'
      },}
  ],

})
router.beforeEach((to,from,next)=>{
  Nprogress.start()
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})
router.afterEach((to,from,next)=>{
  Nprogress.done()
  next()
})
export default router
