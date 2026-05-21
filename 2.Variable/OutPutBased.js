// 1. Let: Used when value may change

let age = 20;
age = 21;
console.log(age);

//2.  Const: Used when value will not change

const pi = 3.14;
// pi = 3.14159; // This will cause an error
console.log(pi);

//3. Var: Old way to declare variables, can lead to issues due to hoisting and scope

var name = "Alice";
name = "Bob";
console.log(name);

//4. Variable Naming Rules
// - Must start with a letter, underscore, or dollar sign
// - Can contain letters, numbers, underscores, or dollar signs
// - Cannot be a reserved keyword
let _username = "user123";
let $price = 19.99;
let firstName = "John";
console.log(_username, $price, firstName);  
//Invalid variable names (uncommenting these will cause errors)
// let 1stName = "John"; // Cannot start with a number
// let first-name = "John"; // Cannot contain hyphens
// let var = "test"; // Cannot use reserved keywords
