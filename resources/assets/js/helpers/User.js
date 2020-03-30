import Token from './Token'
import AppStorge from './AppStroage'

class User {
    login(data){
        axios.post('/api/auth/login', data)
        .then( (res) => { this.loginResoponse(res) })
        .catch( (err) => {
            console.log(err.data)
        })
    }
    loginResoponse(res){
        const access_token = res.data.access_token
        const user_name = res.data.user
        if(Token.isValid(access_token)){
            AppStorge.store(access_token,user_name)
        }
    }
    hasToken(){
        const storeToken = AppStorge.getToken()
        if(storeToken){
            return Token.isValid(storeToken) ? true : false
        }
        return false
    }
    loggedIn(){
        return this.hasToken()
    }
    logOut(){
        AppStorge.clear()
    }
    name(){
        if(this.loggedIn()){
            return AppStorge.getUser()
        }
    }
    id(){
        if(this.loggedIn()){
            const payload = Token.payload(AppStorge.getToken())
            return payload.sub
        }
    }
}

export default User = new User();