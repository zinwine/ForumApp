<template>
    <v-container>
        <div class="row justify-content-center">
            <form class="col-md-6" @submit.prevent="signUp">
            <h3 color="green" class="text-center">SignUp</h3>
                <v-text-field
                v-model="form.name"
                label="Name"
                ></v-text-field>
                <v-text-field
                v-model="form.email"
                label="E-mail"
                type="email"
                ></v-text-field>
                <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                required
                ></v-text-field>
                <v-text-field
                v-model="form.password_confirmation"
                label="Confirm Password"
                type="password"
                required
                ></v-text-field>
                
                <v-btn 
                    class="mr-4 bg-success text-white"
                    type="submit"
                    >
                SignUp
                </v-btn>
                <v-btn class="float-right"><router-link to="/login">Login</router-link></v-btn>
            </form>
        </div>
    </v-container>
</template>

<script>
import User from '../../helpers/User'
    export default {
        data () {
            return {
                form: {
                    name : '',
                    email : '',
                    password: '',
                    password_confirmation: ''
                },
                errors: {}
            }
        },
        created(){
            if(User.loggedIn()){
                this.$router.push('/forum')
            }
        },
        methods: {
            signUp(){
                User.signUp(this.form)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>