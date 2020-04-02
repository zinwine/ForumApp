<template>
    <v-card style="margin: 20px" >
        <div style="color: #fff;background: indigo;text-align:center">
            <v-toolbar-title style="padding: 10px">Category</v-toolbar-title>
        </div>
        <v-card style="margin: 1px" v-for="category in categories" :key="category.id">
            <v-list class="container">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title text>{{ category.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-card>
    
</template>

<script>
    export default {
        props: ['data'],
        data(){
            return{
                categories: {}
            }
        },
        created(){
            this.getCategory()
        },
        methods: {
            getCategory(){
                axios.get('/api/category')
                .then( (res) => {
                    // console.log(res.data.data)
                    this.categories = res.data.data
                })
                .catch( (err) => {
                    console.log(err.data)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>