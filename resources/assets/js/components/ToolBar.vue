<template>
    <v-toolbar dense style="background: indigo;color: #fff">
      <v-toolbar-title><router-link style="text-decoration: none;color: #fff" to="/">ForumApp</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <app-notification />
    <div class="hidden-sm-and-down">
      <router-link style="text-decoration: none;"
         v-for="item in items" 
         :key="item.title"
          :to="item.to" >
        <v-btn style="color: #fff" text v-if="item.show">{{ item.title }}</v-btn>
      </router-link>

    </div>
    </v-toolbar>
</template>

<script>
import User from '../helpers/User'
import AppNotification from './AppNotification'
    export default {
      data(){
        return {
            items: [
              { title: 'Forum', to: '/forum', show: true},
              { title: 'Ask Question', to: '/ask', show: User.loggedIn()},
              { title: 'Category', to: '/category', show: User.loggedIn() && User.admin()},
              { title: 'Login', to: '/login', show: !User.loggedIn()},
              { title: 'Logout', to: '/logout', show: User.loggedIn()},
            ]
        }
      },
      components: { AppNotification },
      created(){
        EventBus.$on('logout', () => {
          if(User.loggedIn()){
            User.logOut()
          }
        })
      },
        
    }
</script>

<style lang="scss" scoped>

</style>