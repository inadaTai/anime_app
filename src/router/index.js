import Vue from 'vue'
import Router from 'vue-router'
import TopPages from '@/components/TopPages'
import akianime2020 from '@/components/akianime2020.vue'
import haru2021 from '@/components/haru2021.vue'
import Event from '@/components/Event.vue'
import InfoPage from '@/components/InfoPage.vue'
import Signup from '@/components/Signup.vue'
import Login from '@/components/Login.vue'
import mypage from '@/components/mypage.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopPages',
      component: TopPages
    },
    {
      path: '/akianime2020',
      name: 'akianime2020',
      component: akianime2020,
    },
    {
      path: '/haru2021',
      name: 'haru2021',
      component: haru2021,
    },
    {
      path: '/item/:Item_name',
      name: 'item',
      component: Event,
    },
    {
      path: '/infoPage',
      name: 'InfoPage',
      component: InfoPage,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: mypage,
    }
  ]
})





