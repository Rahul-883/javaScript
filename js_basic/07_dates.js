// Date


let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreateddate = new Date(2023, 0, 23)
//et myCreateddate = new Date(2023, 0, 23, 5, 3)
//let myCreateddate = new Date("2023-01-15")
let myCreateddate = new Date("01-20-2023")
// console.log(myCreateddate);
// console.log(myCreateddate.toDateString());
// console.log(myCreateddate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateddate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday : long
})
