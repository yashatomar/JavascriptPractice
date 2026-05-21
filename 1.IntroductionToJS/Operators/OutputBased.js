console.log(5 + 5 + "5");                 //105
console.log("5" + 5 + 5);                 //555
console.log(5 + "5" + 5);                 //555
console.log("5" + (5 + 5));               //510

console.log(typeof 10);                   //number 
console.log(typeof "Hello");              //string
console.log(typeof true);                 //boolean
console.log(typeof undefined);            //undefined
console.log(typeof null);                 //object

//Left to right Evaluation
console.log("A" + 1 + 2);                 //A12
console.log(1 + 2 + "A");                 //3A

console.log("Hello" + 5 + 10);            //Hello510
console.log(5 + 10 + "Hello");            //15Hello
console.log("5" + 5 + 5);                 // "555"

//Predict The Output
console.log("10" - 5);                    //5
console.log("10" * 2);                    //20
console.log("10" / 2);                    //5
console.log("10" % 3);                    //1
console.log("5" - "2");                   //3
console.log("5" * "2");                   //10
console.log("5" / "2");                   //2.5
console.log("5" % "2");                   //1

/* Tiny Concept

Unlike +, operators which is used to concatenate strings we have other opeartors like:

-
*
/

try converting strings into numbers automatically.

This behavior is called:

Type Coercion

A major JavaScript interview topic. */