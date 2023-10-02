// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        thid.password = password
    }
        
encryptPassword(){
return `${this.password}abc`
}
changeUsername(){
    return `${this.username.toUpparCase()}`
}

}

cosnt chai = new User ("chai", "chai@gmail.com")

console.log(chai.encryptPassword());
console.log(chai.chai());

// behond the scene

function User(username, email, password){
        this.username = Username;
        this.email = email;
        this.password = password
}

USer.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

cosnt tea = new User ("tea", "chai@gmail.com")

console.log(chai.encryptPassword());
console.log(chai.chan());
