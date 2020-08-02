import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/article.vue'
import Chen from '../views/chen.vue'
import Usurschema from '../views/usurschema.vue'
import Write from '../views/write.vue'
import Management from '../views/management.vue'
import Vie from '../views/vie.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/article',
      name:'Article',
      component:Article
    },
    // {
    //   path:'/chen',
    //   name:Chen,
    //   component:Chen
    // },
    {
      path:'/usurschema',
      component:Usurschema
    },
    {
      path:'/write',
      component:Write
    },
    {
      path:'/management',
      component:Management
    },
    {
      path:'/vie',
      component:Vie
    }
  ]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
