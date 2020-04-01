<template>
    <v-container>
        <div class="row">
            <form class="col-md-6" @submit.prevent="update">
            <h3 color="green" class="text-center">Edit Question</h3>
                <v-text-field
                v-model="form.title"
                label="Title"
                required
                ></v-text-field>
                <br>
                <hr>
                <vue-simplemde label='Question' v-model="form.body" ref="markdownEditor" />
                
                <v-card-actions>
                    <v-btn type="submit" icon small>
                            <v-icon style="color: green">save</v-icon>
                    </v-btn>
                    <v-btn icon small @click="cancelEdit">
                        <v-icon style="color: black">cancel</v-icon>
                    </v-btn>
                </v-card-actions>
            </form>
        </div>
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