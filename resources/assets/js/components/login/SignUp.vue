<template>
    <v-container>
            <form  class="col-md-8 offset-md-2" @submit.prevent="signUp">
            <div style="color: #fff;background: indigo;text-align:center;margin-bottom:20px">
                <v-toolbar-title style="padding: 10px">SignUp</v-toolbar-title>
            </div>
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
                    style="background: indigo; color: white"
                    type="submit"
                    >
                SignUp
                </v-btn>
                <router-link style="text-decoration: none" to="/login"><v-btn style="color: indigo">Login</v-btn></router-link>
            </form>
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