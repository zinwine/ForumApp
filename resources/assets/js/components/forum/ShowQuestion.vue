<template>
        <v-container>
            <v-card style="margin: 20px auto">
                <div style="color: #fff;background: indigo;text-align:center">
                    <v-toolbar-title style="padding: 10px">Question</v-toolbar-title>
                </div>
                    <v-card-title fluid>
                        <div>
                            <v-list-item-title style="color: teal">
                                {{ data.title }}
                                <v-list-item-subtitle  style="color: #777">{{ data.user_name }} Said {{ data.crated_at }}</v-list-item-subtitle>
                            </v-list-item-title>
                        </div>
                        <v-spacer></v-spacer>
                        <v-btn style="background: indigo;color: #fff">{{ data.replies.length }} Replies</v-btn>
                    </v-card-title>
                    <v-card-text v-html="body"></v-card-text>
                    <v-card-actions v-if="own == data.user_id">
                        <v-btn icon small>
                                <v-icon style="color: orange" @click="editMode">edit</v-icon>
                        </v-btn>
                        <v-btn icon small @click="deleteQ(data.slug)">
                            <v-icon style="color: red">delete</v-icon>
                        </v-btn>
                    </v-card-actions>
            </v-card>
            <new-reply v-if="form_open" :data="data" :reply="this.reply_data" :edit_mode="this.reply_edit_mode" />
            <v-card style="margin: 20px" >
                <div style="color: #fff;background: teal;text-align:center">
                    <v-toolbar-title style="padding: 10px">Replies</v-toolbar-title>
                    <v-btn @click="newReply" small style="background: #fff; float: right; z-index: 1; margin: -40px 10px 0 0;">
                            <v-icon style="color: teal">add</v-icon><span style="margin-left: 3px;text-decoration: none">New Reply</span>
                    </v-btn>
                </div>
                <reply :question="data.slug" :reply="reply" v-for="reply in data.replies" :key="reply.id" />
            </v-card>
        </v-container>
</template>

<script>
import User from '../../helpers/User'
import NewReply from '../reply/NewReply'
import Reply from '../reply/Reply'

    export default {
        data(){
            return{
                own: User.getId(),
                form_open: false,
                reply_edit_mode: false,
                reply_data: null
            }
        },
        components:{ NewReply, Reply },
        props: ['data'],
        computed: {
            body(){
                return md.parse(this.data.body)
            }
        },
        created(){
            this.cancelReply()
            this.editReply()
        },
        methods: {
            deleteQ(path){
                axios.delete(`/api/question/${path}`)
                .then( (res) => {
                    this.$router.push('/forum')
                })
            },
            editMode(){
                EventBus.$emit('edit-mode')
            },
            newReply(){
                this.form_open = true
            },
            cancelReply(){
                EventBus.$on('cancel-reply', () => {
                    this.form_open = false
                    this.reply_edit_mode = false
                })
            },
            editReply(){
                EventBus.$on('edit-reply', (replyData) => {
                    this.newReply()
                    this.reply_edit_mode = true
                    this.reply_data = replyData
                })
            },
            
        }
    }
</script>