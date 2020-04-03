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
                count: this.likes.like_count,
            }
        }, 
        created(){           
            Echo.channel('likeChannel')
                .listen('LikeEvent', (e) => {
                    if(this.likes.id == e.id){
                        e.type == 1 ? this.plus() : this.minus()
                    }
            });

            // this.letStart()
        },
        computed: {
            color(){
                return this.liked ? "red" : "purple"
            }
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
                axios.post(`/api/like/${this.likes.id}`)
                .then( () => {
                    // EventBus.$emit('after-create')
                    this.count ++
                })
            },
            decr(){
                
                axios.delete(`/api/like/${this.likes.id}`)
                .then( () => {
                    // EventBus.$emit('after-create')
                    this.count --
                })
            },
            plus(){
                this.count ++
                // this.color = 'red'
            },
            minus(){
                this.count --
                // this.color = 'purple'
            },
        
        }
    }
</script>

<style lang="scss" scoped>

</style>