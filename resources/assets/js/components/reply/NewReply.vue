<template>
      <v-container fluid>
            <form @submit.prevent="edit_mode ? updateReply(reply.id) : create()" class="col-md-8 offset-md-2">
                <v-card>
                    <div style="margin-bottom: 20px;color: #fff;background: indigo;text-align:center">
                        <v-toolbar-title v-if="edit_mode" style="padding: 10px">Edit Reply</v-toolbar-title>
                        <v-toolbar-title v-else style="padding: 10px">New Reply</v-toolbar-title>
                    </div>
                </v-card>
                <vue-simplemde v-if="edit_mode" v-model="reply.reply" ref="markdownEditor" />
                <vue-simplemde v-else v-model="form.body" ref="markdownEditor" />
                <v-card-actions>
                    <v-btn v-if="edit_mode" type="submit" style="margin-right: 20px;">
                            <v-icon style="color: orange">save</v-icon>
                            <span style="margin-left: 3px;color: indigo">Update</span>
                    </v-btn>
                    <v-btn v-else type="submit" style="margin-right: 20px;">
                            <v-icon style="color: green">save</v-icon>
                            <span style="margin-left: 3px;color: indigo">Save</span>
                    </v-btn>
                    <v-btn @click="cancelEdit">
                        <v-icon style="color: black">cancel</v-icon>
                        <span style="margin-left: 3px;color: teal">Cancel</span>
                    </v-btn>
                </v-card-actions>
            </form>
    </v-container>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
    export default {
        props: ['data', 'edit_mode', 'reply'],
        data(){
            return{
                form: {
                    body: null
                },
                // replyId: null
            }
        },
        components: {
            VueSimplemde
        },
        methods: {
            updateReply(id){
                if(this.edit_mode){
                    this.form.body = this.reply.reply
                }
                axios.put(`/api/question/${this.data.slug}/reply/${id}`, this.form)
                .then( (res) =>  {
                    this.cancelEdit()
                    EventBus.$emit('after-create')
                })
            },
            create(){
                axios.post(`/api/question/${this.data.slug}/reply`, this.form)
                .then( (res) =>  {
                    this.cancelEdit()
                    EventBus.$emit('after-create') 
                })
            },
            cancelEdit(){
                EventBus.$emit('cancel-reply') 
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>