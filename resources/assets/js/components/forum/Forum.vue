<template>
     <v-container class="grey lighten-5">
        <v-row no-gutters>
            <v-col cols="8" >
                <question v-for="question in questions" :key="question.path" :data=question
                />
            </v-col>
            category
        </v-row>
    </v-container>
</template>

<script>
import question from './Question'
    export default {
        data(){
            return {
                questions: {}
            }
        },
        components: { 
            question 
        },
        created(){
            axios.get('/api/question')
            .then( (res) => {
                this.questions = res.data.data
            })
            .catch( (err) => {
                console.log(err.data)
            })
        }

    }
</script>
