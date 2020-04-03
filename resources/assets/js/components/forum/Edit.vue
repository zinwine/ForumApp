<template>
    <v-container fluid>
            <form class="col-md-8 offset-md-2" @submit.prevent="update">
                            <v-card>
                    <div style="color: #fff;background: indigo;text-align:center;margin-bottom:20px">
                        <v-toolbar-title style="padding: 10px">Edit Question</v-toolbar-title>
                    </div>
                </v-card>
                <v-text-field
                v-model="form.title"
                label="Title"
                required
                ></v-text-field>
                <br>
                <vue-simplemde label='Question' v-model="form.body" ref="markdownEditor" />
                
                <v-card-actions>
                    <v-btn style="margin-right: 20px;" :disabled="disable" type="submit">
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
        props: ['data'],
        data(){
            return{
                form: {
                    title: null,
                    body: null,
                }
            }
        },
        components: {
            VueSimplemde
        },
        computed: {
            disable(){
                return !(this.form.title && this.form.body)
            }
        },
        created(){
            this.form = this.data
        },
        methods: {
            update(){
                axios.put(`/api/question/${this.form.slug}`, this.form)
                .then( res =>  this.cancelEdit() )
            },
            cancelEdit(){
                EventBus.$emit('edit-cancel') 
            }
        }
    }
</script>
<style>
  @import '~simplemde/dist/simplemde.min.css';
</style>