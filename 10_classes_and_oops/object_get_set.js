const USer = {
    _email: 'r@ra.com',
    _password: "abc",


    get email(){
return this._email.toUpperCase()
    },

    set email(){
this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);