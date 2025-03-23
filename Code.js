let firstName = 'Sharon';
// we use let in the modern world though
let secondName
secondName= 'Sharon';
//You can also declare a variable and then assign it
//The single = sign is known as an assignment operator
// There are assigned keywords that you can't use to assign a variable
//camelCase annotations like "firstName" help with readability
// You can declare multiple variables in the same line example
let lastName = 'Mbae', middleName ='Muthoni';
//Not recommended though, just declare each variable on it's own line
//console.log(firstName);
//Always use descriptive names for your variables
//const is for variables that cannot be changed. For example:
const myName ='Sharon Mbae';
//console.log (myName)
// Primitive datatypes are simple, fundamental data e.g-; string, number, BigInt, boolean,undefined, null, symbol
//Reference data type is Object
let favFruit= 'strawberries';
let favJuice ='Mango juice';
let favMovie= 'Inception';
//this is one way of initializing strings
let numberofDonuts= 12;

//boolean
let learningCoding= true;

//Object. You can store more that one variable in them
let course= {
    name:'Javascript',
    hours:2

};
//Objects are for complex structures

let myFriend= 'Julia';
myFriend='Mildred'
//console.log(myFriend)
//console.log(typeof myFriend);

let study={
name: 'Javascript for beginners',
hours: 4
};

study.name= 'Javascript Fundamentals'
//console.log(study.name)
//Name is the key while 'javascript for beginners' is the value- these are the properties of the object
//We can also access them using brackets annotations
//console.log(course['name'])

//You can also use bracket annotation to access the value
course['name']= 'Javascript 101';
//console.log(course['name'])

//You can also assign a key to the a variable

let property= 'hours';
//console.log(course[property]);

//Arrays-used to store list of data

let productColors= ['blue','green'];
productColors[0]=42;
//console.log(productColors[0]);
//0 is an index to access the first value in the array

//Funtions are building blocks of an application, helps group together statements to perfom a task or calculate a value
function sayHi (name){
   // console.log('Hi '+ name);
}
sayHi('Sharon');

//A function is JS is a named piece of code
//Types of functions-

function multiply(num1, num2){
    return num1 * num2;
}

//console.log(multiply(2,2))

//Operators- Arithmetic operators
//+,_,*,/

//comparison operation'
let num1=4
let num2=3

const isNumboneGreater= num1==num2;

//console.log(isNumboneGreater);

//let a=2;
//let b='2';

//console.log(a==b);
//loose equality- does conversions of the value from one datatype to the other
//truthy

//console.log(a===b);

//Strict equality-it doesn't convert
//Stick to strict equality and use 3 = signs

//Ternary operators

//let age= 16;
//const canDrive= age>=18 ? true : false;
//console.log(canDrive)

//let points= 110;
//const customerType =points >100 ? 'gold': 'silver'
//console.log(customerType);

//logical operator- or, and, not and null
//this is the or operator
//console.log (true || true);// true
//console.log(false || true); //true
//console.log (true || false); //true
//console.log(false || false); //false
//as long as one of the operands is true the results is true

//let hasReservation =true;
//let acceptWalkings= false;

//const hasAccessToTable= hasReservation || acceptWalkings

//console.log  (hasAccessToTable)

//The And operator
//console.log(true && true)//true
//console.log(false && true)//false
//console.log(true && false) //false
//console.log(false && false) //false

//let age= 16;
//let hasCar= true;
//const canDrive= age >=16 && hasCar;

//console.log(canDrive);

//The ambersand && is held higher

//Boolean operand !- returns the inverse

//let isClosedOnSunday =true;
//const isRestaurantOpen= !isClosedOnSunday

//console.log(isRestaurantOpen)

//Null operand

//let a= null;
//const result =a ?? false;

//console.log(result)

//falsy- applies when using logocal values with non-boolean values. The non-boolean values are '', undefined, null, false

//If-else statement

//let priceofChocolate= 1.99;
//let hasAmountinCash= 0;

//const canBuyChocolate =hasAmountinCash >= priceofChocolate;

//console.log(canBuyChocolate);

//if (canBuyChocolate){
    //console.log('Enjoy your purchase')
//}else {
    //console.log('Sorry top up to buy')
//}

//let hour =14;
//if (hour >=6 && hour <= 12)
   // console.log ('Serving breakfast');
//else if (hour >12 && hour <= 14)
    //console.log('Serving Lunch');

//else 
   // console.log ('Serving dinner')
// Switch case statements- used for equality comparison

let job = 'Software Developer'

// if (job === 'Software Developer'){
//     console.log ('Writes code');
// } else if (job === 'Designer'){
//     console.log('Makes User Interface Document')
// }
  
// switch (job){
//     case 'Software Developer':
//     console.log ('Writes code');
//     break;
//     case 'Designer':
//         console.log('Write Interface Documents')
//         break;
//         case 'QA':
//         console.log('Writes Test Analysis')
//         break;
//         default:
//             console.log('Manages the Software Development team')

// }

// let customer = [1, 2, 3, 4, 5, 6, 7];

// let idx =0;

// let lengthOfArray = numbers.length;

// console.log (numbers[idx++]);
// console.log (numbers[idx++]);
// console.log (numbers[idx++]);
// console.log (numbers[idx++]);
// console.log (numbers[idx++]);
// console.log (numbers[idx++]);
// console.log (numbers[idx]);

// for (let idx=0; idx< numbers.length; idx++){
//     //Initialization, condition, increment/decrement
//     console.log (numbers[idx]);
// }

// for(num=0; num<100; num++){
//     console.log('99 numbers')
// }
// Looping through arrays
// const fruits = ["apple", "banana", "Pineapple", 'Kiwi']
// for (let i= 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// let customers = ['Jane', 'John', 'Wangari']

// for (i= 0; i< customers.length; i++){
//     console.log(customers[i])
// }
// Looping through objects
// const user = { name: 'Sharon', age:25, job:'animator'};
// for (let key in user){
//     console.log(key, user[key])
// }
// //Key stands for property names, so name, age and job are keys

// let colors =['green', 'yellow', 'red']

// for (i=0; i< colors.length; i++) {
//     console.log(colors[i])
// }

// While loop

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let i= 0;

// while(i<numbers.length){
//     console.log(numbers[i]);

//     i++
// }
// let sum =0;

// while(true){
//     console.log('Loop')

//     sum++

//     if(sum ===10)
//         break;
// }

//do while loop- specify the code block first then excute the condition after

// let i=0;

// do{
//     console.log(i);

//     i++;
// }while(i<10);

//Infinite loops

// while(true){
//     console.log('Loop');

//     break;

// }

// for (let num= 0; num<=100; num++){
//     console.log(num)
// }

//for-in Loops

// const classes = {
//     name: 'Javascript for Beginners',
//    timeUsed: 10,
//    sections: 10
// };

// console.log(course.name)
// console.log(['timeUsed'])

// for (const key in classes){
//     console.log(classes[key.name])
// }

// for (let key in classes){
//     if (key=== 'name'){
//         console.log('The name of the classes is:', classes[key])
//     }
       
// }

//for of loop
// let numbers = [1, 2, 3, 4, 5]

// for ( let element of numbers){
//     console.log (element)
// }

// break or continue

// for (let i= 0; i<=10; i++){

//     if (i===5){
//        break;
//     }
//     console.log(i)
// }

// let i=0;

// while (i<10){

//     if (i===5){
//       break;  
//     }
//     console.log(i)

//     i++
// }

//continue statement

// for (let i=0; i<10; i++){
//     if(i%2 ===1){
//         continue;
//     }
//     console.log(i)
// }

// let i= 0;

// while (i <10){
//     i++;
//     if (i% 2===0){
//         continue;
//     }
//     console.log(i)
// }

// let i = 0;

// do{
//     i++;
//     if(i%2 ===0){
//         continue;
//     }
//     console.log(i)
// }while (i<10);

// const num= {name: 'Sharon', age: 25, job: 'Animator' }

// for (let key in num){
//     if (typeof num [key]=== 'string'){
//         continue;
//     }
//     console.log(num[key])
// }

// const num=[1,2,3,4,5];
//     for(element of num){
//         if(element% 2===0){
//             continue;
//         }
//         console.log(element)
//     }

// function getLetterGrade (score){

//     if (score <=100 && score>=90){
//         console.log ('Score - A')
//         }else if (score <90 && score >=80){
//         console.log ('score - B')
//         }else if (score <80 && score>=70){
//             console.log ('Score - c')
//         }else if (score <70 && score>=60){
//             console.log ('Score - D')
//         }else {
//             console.log ('Score- F')
//         }
// }
//Write a function that takes an array of numbers and returns a new array with only the even numbers, but doubled.

let arr =[1,2,3,4,5,6]
if (arr % 2 ===0){
    return arr*2
}else return false;




















