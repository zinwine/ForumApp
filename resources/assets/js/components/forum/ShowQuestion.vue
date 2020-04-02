<template>
    <v-card style="margin: 20px auto">
        <v-container>
            <v-card-title fluid>
                <div>
                    <v-list-item-title style="color: teal">
                        {{ data.title }}
                        <v-list-item-subtitle  style="color: #777">{{ data.user_name }} Said {{ data.crated_at }}</v-list-item-subtitle>
                    </v-list-item-title>
                </div>
                <v-spacer></v-spacer>
                <v-btn style="background: indigo;color: #fff">5 Replies</v-btn>
            </v-card-title>
            <v-card-text v-html="body"></v-card-text>
            <v-card-actions v-if="this.own == data.user_id">
                <v-btn icon small>
                        <v-icon style="color: orange" @click="editMode">edit</v-icon>
                </v-btn>
                <v-btn icon small @click="deleteQ(data.slug)">
                    <v-icon style="color: red">delete</v-icon>
                </v-btn>
            </v-card-actions>
        </v-container>
    </v-card>
</template>

<script>
import User from '../../helpers/User'

    export default {
        data(){
            return{
                own: User.getId()
            }
        },
        props: ['data'],
        computed: {
            body(){
                return md.parse(this.data.body)
            }
        },
        methods: {
            deleteQ(path){
                axios.delete(`/api/question/${path}`)
                .then( (res) => {
                    this.$router.push('/forum')
                })
            },
            editMode(){
                EventBus.$emit('edit-mode')
            }
        }
    }
</script>