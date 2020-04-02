<template>
  <div class="text-center">
        <v-btn icon @click="showMenu">
            <v-icon style="color: red">add_alert</v-icon>
        </v-btn>
    <div v-if="showMe">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                showMe: false,
                read: {},
                unread: {},
                unread_count: 0
            }
        },
        created(){
            if(User.loggedIn()){
                // this.getNotification()
            }
        },
        methods: {
            getNotification(){
                axios.post('/api/notification')
                .then( (res) => {
                    this.read = res.data.read
                    this.unread = res.data.unread
                    this.unread_count = res.data.unread.length
                })
            },
            showMenu(){
                if(this.showMe){
                    this.showMe = false
                }else{
                    this.showMe = true
                }
                
            }
        }
    }
</script>
