import Vue from 'vue'
import Router from 'vue-router'
import TopPages from '@/components/TopPages'
import akianime2020 from '@/components/akianime2020.vue'
import Event from '@/components/Event.vue'
import InfoPage from '@/components/InfoPage.vue'


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
      component: akianime2020
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
    }
  ]
})
