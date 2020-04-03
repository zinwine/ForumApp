<template>
    <v-container fluid>
        <div class="row">
            <form @submit.prevent="create" class="col-md-8 offset-md-2">
            <!-- <h3 style="text-align:center; color: teal">Ask Question</h3> -->
                <v-card>
                    <div style="margin-bottom: 20px;color: #fff;background: indigo;text-align:center">
                        <v-toolbar-title style="padding: 10px">Ask Question</v-toolbar-title>
                    </div>
                </v-card>
                <v-text-field
                v-model="form.title"
                label="Title"
                required
                ></v-text-field>
                <br>
                <select style="width: 100%;margin-bottom: 50px" v-model="form.category_id">
                    <option>Select One</option>
                    <option :value="category.id" v-for="category in categoies" :key="category.id">{{  category.name  }}</option>
                </select>
                <!-- <v-select
                :items="categoies"
                item-text="name"
                item-value="id"
                v-model="form.category_id"
                label="Category"
                ></v-select> -->
                <vue-simplemde label='Question' v-model="form.body" ref="markdownEditor" />
                
                <v-btn 
                    style="background: indigo; color: white"
                    type="submit"
                    :disabled="disable"
                    >
                Ask Question
                </v-btn>
            </form>
        </div>
    </v-container>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
    export default {
        data(){
            return{
                categoies: [],
                form: {
                    title: null,
                    category_id: null,
                    body: null
                }
            }
        },
        components: {
            VueSimplemde
        },
        computed: {
            disable(){
                return !(this.form.title && this.form.body && this.form.category_id)
            }
        },
        created(){
            axios.get('/api/category')
            .then( (res) => { 
                this.categoies = res.data.data
            })
        },
        methods: {
            create(){
                axios.post('/api/question', this.form)
                .then( res =>  this.$router.push(res.data.data.path) )
            }
        }
    }
</script>
<style>
  @import '~simplemde/dist/simplemde.min.css';
</style>