import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import SignUp from '../components/login/SignUp'
import Forum from '../components/forum/Forum'
import Logout from '../components/login/Logout'

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login },
    { path: '/sign-up', component: SignUp },
    { path: '/forum', component: Forum },
    { path: '/logout', component: Logout }
  ]

  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

  export default router