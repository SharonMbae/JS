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

let a=2;
let b='2';

//console.log(a==b);
//loose equality- does conversions of the value from one datatype to the other
//truthy

console.log(a===b);

//Strict equality-it doesn't convert
//Stick to strict equality and use 3 = signs













