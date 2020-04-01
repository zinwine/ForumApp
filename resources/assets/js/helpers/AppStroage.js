class AppStorage{
    store(token, name, id)
    {
        localStorage.setItem('token', token)
        localStorage.setItem('name', name)
        localStorage.setItem('id', id)
    }
    clear(){
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        localStorage.removeItem('id')
    }
    getToken(){
        return localStorage.getItem('token')
    }
    getName()
    {
        return localStorage.getItem('name')
    }
    getId()
    {
        return localStorage.getItem('id')
    }
}
export default AppStorage = new AppStorage()