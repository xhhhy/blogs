import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:"/list",
      children: [
        {
          path: '/list',
          name: 'list',
          component: function () {
            return import('./views/List.vue')
          },
        },
        {
          path: '/about',
          name: 'about',
          component: function () {
            return import('./views/About.vue')
          },
        },
        {
          path: '/success',
          name: 'success',
          component: function () {
            return import('./views/success.vue')
          }
        }]
    }]
})
