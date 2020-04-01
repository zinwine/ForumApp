import Token from './Token'
import AppStorge from './AppStroage'

class User {
    login(data){
        axios.post('/api/auth/login', data)
        .then( (res) => { 
            this.loginResoponse(res) 
        })
        .catch( err => console.log(err.response.data.error))
    }
    loginResoponse(res){
        const access_token = res.data.access_token
        const user_name = res.data.user_name
        const user_id = res.data.user_id
        if(Token.isValid(access_token)){
            AppStorge.store(access_token, user_name, user_id )
        } 
        window.location = '/forum'       
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
        window.location = '/forum'
    }
    getName(){
        if(this.loggedIn()){
            return AppStorge.getName()
        }
    }
    getId(){
        if(this.loggedIn()){
            return AppStorge.getId()
        }
    }
    id(){
        if(this.loggedIn()){
            const payload = Token.payload(AppStorge.getToken())
            return payload.sub
        }
    }

    own(id){
        return this.id() == id
    }

// ************** SignUp *************
    signUp(data){
        axios.post('/api/auth/signup', data)
        .then( (res) => { 
            this.loginResoponse(res) 
    })
        .catch(err => console.log(err.response.data.error))
    }

}

export default User = new User();