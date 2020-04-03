<template>
    <v-card style="margin: 1px">
        <v-list class="container">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-subtitle  style="color: #777"><b style="color: indigo">{{ reply.user }}</b> Said <strong style="color: teal">{{ reply.created_at }}</strong></v-list-item-subtitle>
                    <v-divider></v-divider>
                    <v-card-text v-html="reply.reply"></v-card-text>
                </v-list-item-content>
                <like style="margin-right: 15px;" :likes="reply" />
                <span v-if="own == reply.user_id">
                    <v-list-item-action style="margin-right: 7px">
                        <v-btn @click="replyUpdate(reply)" icon small>
                            <v-icon style="color: orange">edit</v-icon>
                        </v-btn>
                    </v-list-item-action>
                    <v-list-item-action>
                        <v-btn @click="deleteReply(question.slug,reply.id)" icon small>
                            <v-icon style="color: red">delete</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </span>
                
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
import User from '../../helpers/User'
import Like from '../like/Like'
    export default {
        props: ['reply', 'question'],
        data(){
            return{
                own: User.getId(),
            }
        },
        created(){
            this.listen()
        },
        components: { Like },
        methods: {
            replyUpdate(replyData){
                EventBus.$emit('edit-reply', replyData)
            },
             deleteReply(slug, id){
                //  console.log(this.question)
                axios.delete(`/api/question/${slug}/reply/${id}`)
                .then( res =>  EventBus.$emit('after-create')  )
            },
            listen(){
                Echo.channel('deleteReplyChannel')
                .listen('DeleteReplyEvent', (e) => {
                    for (let index = 0; index < this.question.replies.length; index++) {
                        if(this.question.replies[index].id == e.id){
                            this.question.replies.splice(index, 1)
                        }
                    }
                });

                // Echo.private('App.User.' + User.id())
                // .notification((notification) => {
                //     console.log(this.question.replies);
                //     // this.question.replies.unshift(notification.reply);
                // });

            }

        }
    }
</script>
