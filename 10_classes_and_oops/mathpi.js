const descripter = Object.getOwnPropertyDescriptors(Math, "PI")

console.log(descripter);

// console.log(Math.PI);
// MAth.PI =5
// console.log(Math.PI);

const chai =  {
    name: 'ginger cahi',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptors(chai, "name"));

for( let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}, ${value}}`);

    }
}