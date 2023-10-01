let myName = "rahul    "
let myChannel = "rahulY    "

console.log(myName.truelength());


let myHeros = ["thor", "spiderman",]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSoiderPower: function(){
        console.log(`spidy power is ${this,this.spiderman}`);
    }
}

object.prototype.hitesh = function(){
    console.log((`hitesh is present in all object`));
}

Array.prototype.heyrahul = function(){
    console.log(`Rahul says hello`);
}

//heroPower.hitesh()
myHeros.rahul()
myHeros.heyRahul()
// heroPower.heyRahul()




// inheritance

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport ={
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax 

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"rahul".trueLength()
"iceTea".trueLength()