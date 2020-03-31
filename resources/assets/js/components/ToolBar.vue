<template>
    <v-toolbar dense>
      <v-toolbar-title>ForumApp</v-toolbar-title>

      <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <router-link 
         v-for="item in items" 
         :key="item.title"
          :to="item.to" >
        <v-btn text v-if="item.show">{{ item.title }}</v-btn>
      </router-link>

    </div>
    </v-toolbar>
</template>

<script>
import User from '../helpers/User'
    export default {
      data(){
        return {
            items: [
              { title: 'Forum', to: '/forum', show: true},
              { title: 'Ask Question', to: '/ask', show: User.loggedIn()},
              { title: 'Category', to: '/category', show: User.loggedIn()},
              { title: 'Login', to: '/login', show: !User.loggedIn()},
              { title: 'Logout', to: '/logout', show: User.loggedIn()},
            ]
        }
      },
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