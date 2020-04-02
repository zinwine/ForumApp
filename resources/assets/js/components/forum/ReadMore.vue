<template>
    <div v-if="question" >
        <edit v-if="edit_mode" :data=question />
        <show-question v-else :data=question />
    </div>
</template>

<script>
import ShowQuestion from './ShowQuestion'
import Edit from './Edit'
    export default {
        data(){
            return{
                question: null,
                edit_mode: false
            }
        },
        components: { ShowQuestion, Edit},
        created(){
            this.listen()
            this.getQuestion()
            this.afterReload()
        },
        methods: {
            listen(){
                EventBus.$on('edit-mode', () => {
                    this.edit_mode = true
                })
                EventBus.$on('edit-cancel', () => {
                    this.edit_mode = false
                })
            },
            getQuestion(){
                axios.get(`/api/question/${this.$route.params.slug}`)
                .then( (res) => {
                    this.question = res.data.data
                })
                .catch( (err) => {
                    console.log(err.data)
                })
            },
            afterReload(){
                EventBus.$on('after-create', () => {
                    this.getQuestion()
                })       
            }
        }
    }
</script>
