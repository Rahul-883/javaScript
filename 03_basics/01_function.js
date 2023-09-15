
function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}

//sayMyName()


// function addTwoNunbers(number1, number2){
//        console.log( number1 + number2);
// }

function addTwoNunbers(number1, number2){
    // let return result
    // return number1 + number2

}

const result =addTwoNunbers(3, 5)

//console.log("Resut:", result);

function loginUserMessage(username = "sam"){
    if(!username)   //if(username === undefined)
    {
       console.log("Please enter a username");
        return
    }
    return `${username} just logged in` 
}

//console.log(loginUserMessage("Rahul"));
//console.log(loginUserMessage());


function calculateCartpPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartpPrice(200,500,300,5000));

const user ={
    username: "rahul",
    prices: 299
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)
handleObject({
    username: "yadav",
    price: 499
})

const myNewArray = [200,400,500,100]

function returnSecondValue(getArray){
    return getArray[1]

}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,100]));