<template>
    <v-container fluid>
            <form @submit.prevent="edit_mode ? editCategory(form.slug) : createCategory()" class="col-md-6 offset-md-3">
                <div style="margin-bottom: 20px;color: #fff;background: indigo;text-align:center">
                        <v-toolbar-title style="padding: 10px" v-if="edit_mode">Edit Category</v-toolbar-title>
                        <v-toolbar-title style="padding: 10px" v-else>Create Category</v-toolbar-title>
                    </div>
                <v-text-field
                v-model="form.name"
                label="Title"
                required
                ></v-text-field>
               
                <div v-if="edit_mode">
                    <v-btn style="background: indigo; color: white" type="submit" >Update</v-btn>
                    <v-btn @click="cancel">Cancel</v-btn>
                </div>
                <v-btn v-else style="background: indigo; color: white" type="submit" >Create</v-btn>
            </form>

        <v-container fluid class="col-md-8 offset-md-2">
            <v-card style="margin: 20px">
                <div style="color: #fff;background: indigo;text-align:center">
                    <v-toolbar-title style="padding: 10px">Category</v-toolbar-title>
                </div>
                <v-card style="margin: 1px" v-for="(category, index) in categories" :key="category.id">
                    <v-list class="container">
                        <v-list-item>
                            <v-list-item-action>
                                <v-btn icon small>
                                    <v-icon style="color: orange" @click="editCate(category)">edit</v-icon>
                                    <!-- <v-icon style="color: orange" @click="editCate(index)">edit</v-icon> -->
                                </v-btn>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title style="text-align:center">{{ category.name }}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn icon small>
                                    <v-icon style="color: red" @click="deleteCate(category.slug, index)">delete</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-card>
        </v-container>
    </v-container>
</template>

<script>
import User from '../../helpers/User'

    export default {
        data(){
            return{
                form: {
                    name: null,
                },
                categories: {},
                edit_mode: false
                // editSlug:null
            }
        },
        created(){
            if(!User.admin()){
                this.$router.push('/forum')
            }
            this.getCategory()
        },
        methods:{
            createCategory(){
                axios.post('/api/category', this.form)
                .then( (res) => {
                    // console.log(res.data.data)
                    // this.$router.push('/forum')
                    this.form.name = null
                    this.getCategory()
                    // this.categories.unshift(res.data)
                })
                .catch( (err) => {
                    console.log(err.data)
                })
            },
            getCategory(){
                axios.get('/api/category')
                .then( (res) => {
                    // console.log(res.data.data)
                    this.categories = res.data.data
                })
                .catch( (err) => {
                    console.log(err.data)
                })
            },
            deleteCate(slug, index){
                axios.delete(`/api/category/${slug}`)
                .then( (res) => {
                    // console.log(res.data.data)
                    // this.categories = res.data.data
                    // this.getCategory()
                    // this.categories.unshift(res.data)
                    this.categories.splice(index,1)
                })
                .catch( (err) => {
                    console.log(err.data)
                })
            },
            // editCate(index){
            editCate(data){
                this.edit_mode = true
                this.form = data
                // this.form.name = this.categories[index].name
                // this.editSlug = this.categories[index].slug
                // this.categories.splice(index,1)
            },
            // editCategory(){
            editCategory(slug){
                // axios.patch(`/api/category/${this.editSlug}`, this.form)
                axios.patch(`/api/category/${slug}`, this.form)
                .then( (res) => {
                    // console.log(res.data.data)
                    // this.$router.push('/forum')
                    this.form.name = null
                    this.getCategory()
                    this.cancel()
                    // this.categories.unshift(res.data)
                })
                .catch( (err) => {
                    console.log(err.data)
                })
            },
            cancel(){
                this.edit_mode = false
                // this.editSlug = null
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>