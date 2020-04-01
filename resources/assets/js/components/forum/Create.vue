<template>
    <v-container>
        <div class="row">
            <form class="col-md-6" @submit.prevent="create">
            <h3 color="green" class="text-center">Ask Question</h3>
                <v-text-field
                v-model="form.title"
                label="Title"
                required
                ></v-text-field>
                <br>
                <label for="category">Category</label>
                <select style="width: 100%" name="" id="category" v-model="form.category_id">
                    <option :value="category.id" v-for="category in categoies" :key="category.id">{{  category.name  }}</option>
                </select>
                <hr>
                <!-- <v-select
                :items="categoies"
                item-text="name"
                item-value="id"
                v-model="form.category_id"
                label="Category"
                ></v-select> -->
                <!-- <v-text-field
                v-model="form.body"
                label="Question"
                required
                ></v-text-field> -->
                <br>
                <hr>
                <vue-simplemde label='Question' v-model="form.body" ref="markdownEditor" />
                
                <v-btn 
                    class="mr-4 bg-primary text-white"
                    type="submit"
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
                    title: '',
                    category_id: '',
                    body:''
                }
            }
        },
        components: {
            VueSimplemde
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