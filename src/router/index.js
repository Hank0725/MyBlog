import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import Article from '@/views/Article'
import Admin from '@/views/Admin'
import Login from '@/views/Login'
import Error from '@/views/Error'
import AdminHome from '@/views/Admin/AdminHome'
import Add from '@/views/Admin/Add'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/aritle/:id',
    name: 'Article',
    component: Article
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '/',
        name: 'AdminHome',
        component: AdminHome
      },
      {
        path: 'add',
        name: 'Admin-Add',
        component: Add
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
