<template>
     <v-container class="grey lighten-5">
        <h3 style="text-align:left;margin-left: 30px; color: indigo">Asked Question</h3>
        <v-row no-gutters>
            <v-col cols="8" >
                <question v-for="question in questions" :key="question.path" :data=question
                />
            </v-col>
            <v-col cols="4">
                <!-- <h4 style="text-align:center;color: teal">Category</h4> -->
                <!-- <v-card style="margin: 20px" >
                    <div style="color: #fff;background: teal;text-align:center">
                        <v-toolbar-title style="padding: 10px">Category</v-toolbar-title>
                    </div> -->
                <sidebar/>
                <!-- <sidebar v-for="category in categories" :key="category.id" :data=category /> -->
                <!-- </v-card> -->
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import question from './Question'
import sidebar from './SideBar'
    export default {
        data(){
            return {
                questions: {},
                // categories: {}
            }
        },
        components: { 
            question , sidebar
        },
        created(){
            this.getQuestion()
            // this.getCategory()
        },
        methods: {
            getQuestion(){
                axios.get('/api/question')
                .then( (res) => {
                    this.questions = res.data.data
                })
                .catch( (err) => {
                    console.log(err.data)
                })
            },
            // getCategory(){
            //     axios.get('/api/category')
            //     .then( (res) => {
            //         // console.log(res.data.data)
            //         this.categories = res.data.data
            //     })
            //     .catch( (err) => {
            //         console.log(err.data)
            //     })
            // }
        }

    }
</script>
