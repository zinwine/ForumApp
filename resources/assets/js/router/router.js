import Vue from 'vue'
import VueRouter from 'vue-router'

// ******************** AUTHORIZATION ROUTE *********************

import Parallax from '../components/Parallax'

// ******************** AUTHORIZATION ROUTE *********************

import Login from '../components/login/Login'
import SignUp from '../components/login/SignUp'
import Logout from '../components/login/Logout'

// ******************** FORUM ROUTE *********************

import Forum from '../components/forum/Forum'
import ReadMore from '../components/forum/ReadMore'
import Create from '../components/forum/Create'
import Edit from '../components/forum/Edit'

// ******************** CATEGORY ROUTE *********************

import CategoryCreate from '../components/category/Create'


Vue.use(VueRouter)

const routes = [
   // ******************** Home Parallax COMPONENT *********************
   { path: '/', component: Parallax },

  // ******************** AUTHORIZATION COMPONENT *********************
    { path: '/login', component: Login },
    { path: '/sign-up', component: SignUp },
    { path: '/logout', component: Logout },

    // ******************** FORUM COMPONENT *********************
    { path: '/forum', component: Forum },
    { path: '/ask', component: Create },
    { path: '/question/:slug', component: ReadMore },
    { path: '/edit_question/:slug', component: Edit },

   // ******************** CATEGORY COMPONENT *********************

    { path: '/category', component: CategoryCreate },
  ]

  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

  export default router