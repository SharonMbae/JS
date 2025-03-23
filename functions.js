//functions are a block of code that you keep together to perform something which can be repeated.
// Functions should have a name or not
//function declaration- declaring and defining a function is the same thing

// function printMe(){
//     console.log ('printing ...')
// }
// printMe()//Calling the function

// function printThis(param){
//     console.log(param);
// }
// printThis('tapas')// whatever you pass inside this value is call argument


//function expression

// const printMe= function(){
//     console.log('print')
// }

// printMe()

// const sumNumbers= function(a=1, b=2){
//     console.log(a+b)
// }
// sumNumbers()

//return a function

// function sum (a,b){
//     return a+b;
// }
// console.log (sum(1,2))

//default parameters

// function calc(a, b){
//     return (2 * (a+b));
// }
// console.log (calc (2, 3))

// Rest parameters- it allows a function to accept any number of arguments. We can only have one rest parameter and it should be the last parameter

// function collectThing(x, ...y){
//  console.log(x);
//  console.log(y)
// }
// collectThing(1,2,3,4,5,6,7,8,9)

//Arrow function

// const add = (x,y)=>{
//     return x+y;
// }

// console.log(add (2,3))

// const add = (x,y ) => x+y;

// console.log(add (2,3))

//nested function-  function within a function

// function outer(){
//     console.log('outer');

//     function inner (){
//         console.log('inner')
//     }

//     inner()
// }
// outer()

//function scope
// function doSomething(){
//     let x =10;
//     const y=20;
//     var z= 30;

//     console.log(x,y,z)
// }

// doSomething()

// var x=10;
// const y=20;
// let z=30;

// function doSomething(){
//     console.log(x,y,z)
// }
// doSomething()

//closures- is a function that can have free variables in an environment that can run that variable

// function outer (x){
//     function inner (y){
//         return x+y;
//     }
//     return inner;
// }
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 10));

