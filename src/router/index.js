import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'

Vue.use(wcSwiper)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
