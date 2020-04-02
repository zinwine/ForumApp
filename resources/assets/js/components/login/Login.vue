<template>
    <v-container fluid>
            <form class="col-md-8 offset-md-2" @submit.prevent="login">
            <div style="color: #fff;background: indigo;text-align:center;margin-bottom:20px">
                <v-toolbar-title style="padding: 10px">Login</v-toolbar-title>
            </div>
                <v-text-field
                v-model="form.email"
                label="E-mail"
                required
                ></v-text-field>
                <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                required
                ></v-text-field>
                
                <v-btn 
                    style="background: indigo; color: white"
                    type="submit"
                    >
                Login
                </v-btn>

      <router-link style="text-decoration: none" to="/sign-up"><v-btn style="color: indigo">SignUp</v-btn></router-link>
            </form>
    </v-container>
</template>


<script>
import User from '../../helpers/User'
    export default {
        data () {
            return {
                form: {
                    email : '',
                    password: ''
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
            login(){
                User.login(this.form)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>