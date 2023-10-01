const user = {
    username: "rahul",
    loginCount: 8,
    singnIn: true,

    getUserDetails: function(){
        //console.log("Got user details from Databse");
       // console.log(`username:${this.username}`);
        //console.log(this);
    }
}

//console.log(user.username);

//console.log(user.getUserDetails);
//console.log(this);


function User(username, loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = this.isLoggedIn

    this.greeting = function(){
        console.log(`welcome &{this.username}`);
    }

    return this
}

const userOne = new User("rahul", 12, true)
const userTwo = new User("CahiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);