import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
  ,
  {
    path: '/WeChatPage',
    name: 'WeChatPage',
    component: () => import('../views/WeChatReading/WeChatPage.vue'), //书首页
    // children:[]
  },  {
    path: '/WeChatWelfare',
    name: 'WeChatWelfare',
    component: () => import('../views/WeChatReading/WeChatWelfare.vue'), //书福利
  },  {
    path: '/WeChatListening',
    name: 'WeChatListening',
    component: () => import('../views/WeChatReading/WeChatListening.vue'),//书听书
  },
  {
    path: '/DetailsPage',
    name: 'DetailsPage',
    component: () => import('../views/details/DetailsPage.vue'),//子传夫 练习页面
  },
  {
    path: '/PassHusbandv',
    name: 'PassHusbandv',
    component: () => import('../views/PracticeVUe/PassHusbandv.vue'),//子传夫 练习页面
  },{
    path: '/search',
    name: 'search',
    component: () => import('../views/PracticeVUe/SearchRake.vue'),//子传夫 练习页面
  },
  
]

const router = new VueRouter({
  routes
})

export default router
