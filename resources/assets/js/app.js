
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// ************** Vuetify **************
import Vuetify from 'vuetify'
 
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)


// *******************************************

import md from 'marked'
window.md = md

// **************** Custom Evevent ************

window.EventBus = new Vue()

// ************** Helper User ***************

import User from './helpers/User'
window.User = User

// ************** Vue Router ***********
import router from './router/router'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('app-home', require('./components/AppHome.vue').default);

const app = new Vue({
    el: '#app',
    router
});
