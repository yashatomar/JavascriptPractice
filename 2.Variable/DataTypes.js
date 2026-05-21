//JavaScript has two categories:Primitive Non-primitive

//Primitive Data Types

//String
let name = "Akshay";
let greeting = 'Hello, World!';
console.log(name);
console.log(greeting);

//Number
let age = 25;
let pi = 3.14;
console.log(age);
console.log(pi);

//Boolean
let isStudent = true;
let isGraduated = false;
console.log(isStudent);
console.log(isGraduated);

//Undefined
let address;
console.log(address);

//Null
let phoneNumber = null;
console.log(phoneNumber);

//BigInt
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);   

//Symbol
let sym1 = Symbol("unique");
let sym2 = Symbol("unique");
console.log(sym1 === sym2); // false, each symbol is unique 

//Non-Primitive Data Types

//Object
let person = {
    name: "Akshay",
    age: 25,
    isStudent: true
};
console.log(person);

//Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);


/*

Important Interview Points

Q: Difference between let, const, var?

let	             const	              var
Reassignable	Not reassignable	Old version
Block scope  	Block scope	        Function scope


Q: Difference between null and undefined?

null	                            undefined
Explicitly set to no value	   Not assigned a value
Type of null is object     	   Type of undefined is undefined

Q: What are primitive and non-primitive data types?
Primitive data types are basic types that hold a single value (string, number, boolean, undefined,
null, bigint, symbol) and are immutable. Non-primitive data types (objects, arrays) can hold
multiple values and are mutable.

Q: What is the difference between == and ===?
== checks for value equality with type coercion,
while === checks for both value and type equality without coercion.
For example, 5 == "5" is true, but 5 === "5" is false.


Q: What is type coercion?
Type coercion is JavaScript's automatic conversion of values
from one data type to another, often occurring during operations
like addition or comparison. For example, when adding a number and a string,
JavaScript converts the number to a string and concatenates them. 
This can lead to unexpected results if not understood properly.    


Q: What is dynamic typing?
Dynamic typing means that variables in JavaScript can hold values of any type and can change 
type at runtime. For example, a variable can be assigned a number, and later reassigned
to a string without any errors. This flexibility allows for more dynamic code but also 
requires careful handling to avoid type-related bugs.

Q:What is block scope?
Block scope refers to the visibility of variables within a specific block of code,
such as within curly braces {}. Variables declared with let and const are block-scoped, 
meaning they are only accessible within the block they are defined in. In contrast, 
variables declared with var are function-scoped, meaning they are accessible throughout 
the entire function they are defined in, regardless of block boundaries. 
This can lead to unintended consequences when using var, as it does not respect block scope.
*/