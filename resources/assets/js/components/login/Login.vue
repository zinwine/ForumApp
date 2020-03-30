<template>
    <v-container>
        <div class="row justify-content-center">
            <form class="col-md-6" @submit.prevent="login">
            <h3 color="green" class="text-center">LOGIN</h3>
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
                    color="green"
                    class="mr-4"
                    type="submit"
                    >
                Login
                </v-btn>
            </form>
        </div>
    </v-container>
</template>


<script>
    export default {
        data () {
            return {
                form: {
                    email : '',
                    password: ''
                }
            }
        },
        methods: {
            login(){
                axios.post('/api/auth/login')
                .then( (res) => {
                    alert(res.data)
                })
                .cath( (err) => {
                    alert(err.data)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>