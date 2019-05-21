import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Post from './views/Post'
import SingUp from './views/SingUp'
import SingIn from './views/SingIn'
import Category from './views/Category'
import Not from './views/404not'
import Profile from './views/Profile'
import NewPost from './views/NewPost'

import store from './store'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/register',
      name: 'register',
      component: SingUp,
      beforeEnter: (to, from, next) => {
        if (store.state.userStatement === 'false') {
          next()
        }
        console.log(store.state.userStatement)
        next('/')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: SingIn,
      beforeEnter: (to, from, next) => {
        if (store.state.userStatement === 'true') {
          next('/')
        }
        next()
      }
    },
    {
      path: '/category/:id',
      name: 'category',
      component: Category
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: (to, from, next) => {
        if (store.state.userStatement === "false") {
          next('/')
        }
        next()
      }
    },
    {
      path: '/newpost',
      name: 'newpost',
      component: NewPost,
      beforeEnter: (to, from, next) => {
        if (store.state.userStatement === "false") {
          next('/')
        }
        next()
      }
    },
    {
      path: '*',
      name: 'Not',
      component: Not
    },
  ]
})

// router.beforeEach((to, from, next) => {
//
//   if (to.fullPath === '/login'){
//
//   }
//
//   if (to.fullPath === '/register') {
//     if (store.state.userStatement){
//       next('/')
//     }
//   }
//
//   if (to.fullPath === '/login') {
//     if (store.state.userStatement){
//       next('/')
//     }
//   }
//
//   next()
//
// })


export default router
