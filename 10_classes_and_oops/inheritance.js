class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email =email
        this.password = password
        }
        addCourse(){
            console.log(`A new Course was added by ${this.username}`);
        }
}

const chai = Teacher("chai", "chai@Teacher.com", "123")

//chai.addCourse()
chai.logMe()

const masalaChai = new User("masalachai")

//masalaChai.addCourse()
masalaChai.logMe()

console.log(chai instanceof User);