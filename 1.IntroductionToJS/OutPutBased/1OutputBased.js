console.log(2+"5"); //25
console.log("10"+20); //1020

/*In JavaScript, a primitive value is a single value with no properties or methods.
JavaScript has 7 primitive data types:

string
number
boolean
bigint
symbol
null
undefined
*/

console.log(typeof "John");         // Returns string
console.log(typeof ("John"+"Doe")); // Returns string
console.log(typeof 3.14);           // Returns number
console.log(typeof 33);          // Returns number
console.log(typeof (33 + 66));      // Returns number
console.log(typeof true);           // Returns boolean
console.log(typeof false);          // Returns boolean
console.log(typeof 1234n);          // Returns bigint
console.log(typeof Symbol());       // Returns symbol
console.log(typeof x);              // Returns undefined
console.log(typeof null);           // Returns object (this is a known quirk in JavaScript)
