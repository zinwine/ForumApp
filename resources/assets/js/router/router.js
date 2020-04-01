import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import SignUp from '../components/login/SignUp'
import Logout from '../components/login/Logout'
import Forum from '../components/forum/Forum'
import ReadMore from '../components/forum/ReadMore'
import Create from '../components/forum/Create'
import Edit from '../components/forum/Edit'

Vue.use(VueRouter)

const routes = [
    { path: '/login', component: Login },
    { path: '/sign-up', component: SignUp },
    { path: '/forum', component: Forum },
    { path: '/logout', component: Logout },
    { path: '/ask', component: Create },
    { path: '/question/:slug', component: ReadMore },
    { path: '/edit_question/:slug', component: Edit }
  ]

  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

  export default router