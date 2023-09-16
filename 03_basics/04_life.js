// immediately Invoked function expression (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('rahul')