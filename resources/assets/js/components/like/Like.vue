<template>
    <div>
        <v-btn @click="likeIt" icon>
            <v-icon v-bind:style="{color : color}">favorite</v-icon>
            <span>{{count}} <span> </span></span>
        </v-btn>
    </div>
</template>

<script>
import User from '../../helpers/User'
    export default {
        props: ['likes'],
        data(){
            return {
                liked: this.likes.liked,
                count: 0,
                color: 'purple'
            }
        }, 
        created(){
            // this.letStart()
            this.liked ? this.color = 'red' : this.color = 'purple'
            this.count = this.likes.like_count
        },
        methods: {
            // letStart(){
            //     let list=[];
            //     $.each(this.likes.like_user, function(key, user) {
            //         list.push(user.user_id);
            //     });
            //     this.liked = list.includes(parseInt(User.getId())) ? true : false
            //     this.liked ? this.color = 'red' : this.color = 'purple'
            // },
            likeIt(){
                if(User.loggedIn()){
                    // this.letStart()
                    this.liked ? this.decr() : this.incr() 
                    this.liked = !this.liked
                }
            },
            incr(){
                this.count ++
                axios.post(`/api/like/${this.likes.id}`)
                .then( () => {
                    EventBus.$emit('after-create')
                    this.color = 'red'
                })
            },
            decr(){
                this.count --
                axios.delete(`/api/like/${this.likes.id}`)
                .then( () => {
                    EventBus.$emit('after-create')
                    this.color = 'purple'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>