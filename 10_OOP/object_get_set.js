const User ={
    _email:'javascript@js.com',
    _password:"javascript",


    get email(){
     return this._email.toUpperCase()
    },

    set email(value){
        this._email = value

    },
    get password(){
     return this._password.toUpperCase()
    },

    set password(value){
        this._password = value

    }
}

const tea = Object.create(User)
console.log(tea.email)
console.log(tea.password)

