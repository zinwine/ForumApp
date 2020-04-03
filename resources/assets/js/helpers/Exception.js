import User from './User'
class Exception {
    handle(error){
        this.isException(error.response.data)
    }
    isException(error){
        if(error == "Token Expired"){
            User.logOut()
        }
    }
}

export default Exception = new Exception()