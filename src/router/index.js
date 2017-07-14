import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login.vue'
import Home from '../pages/home.vue'
import Error from '../pages/error.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Error',
      name: 'Error',
      component: Error
    }
  ]
})
