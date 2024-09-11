// let name = "Mosh";
// console.log(name);

//VARIABLE RULES..
//use meaningful and descriptive words
//can not stand with a number
//dont use reserve words
//no space or hypen
//camel case... myStore
//declare each variable in a single line

//when we dont want the value of a variable to change, we use the const

//use let when you need to reassign a variable

//primitive variable type also known as value TYPES
let name = "Mosh"; //string literal
let age = 40; //number..all numbers in javascript are numbers, it doesnt recognised floating numbers
let isApproved = false; //boolean
let firstName = undefined;
let selectedColor = null; //we use null for when we want to clear the value of a variable

//1.REFERENCE TYPES
//object has props
let person = {
  name: "ima",
  age: 90,
};

//DOT NOTATION
person.name = "Abi";

//BRACKET NOTATION
person["name"] = "ima";
console.log(person.name);

//2.ARRAYS can have any type of variables stored in them
//array is an object in javascript
//array has in built properties in javascript
//array is a data structure that takes a list of items
let selectedColors = ["red", "blue"];
selectedColors[2] = 9;
console.log(selectedColors.length);

//3. FUNCTION has parameter and arguement and can have several parameter
//function performs a task or returns something
function greet(name, lastName, age) {
  console.log("Hello " + name + " " + lastName + " " + age);
}
greet("Jalingo", "Sami", 45);

function square(number) {
  return number * number;
}

console.log(square(2)); //console.log is also a function
