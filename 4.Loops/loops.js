//Loops:Loops allow us to repeat code multiple times automatically.
//A loop repeats code until a condition becomes false.

/*
| Loop         | Usage                      |
| ------------ | -------------------------- |
| `for`        | Known number of iterations |
| `while`      | Run until condition false  |
| `do...while` | Runs at least once         |
| `for...of`   | Loop over iterable values  |
| `for...in`   | Loop over object keys      |
 
*/ 

//For Loop: A for loop repeats until a specified condition evaluates to false.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//reverse for loop
for (let i = 5; i >= 1; i--) {
  console.log(i);   
}

//While Loop: A while loop repeats as long as a specified condition is true.
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

//Do...While Loop: A do...while loop is similar to a while loop, but it executes the block of code at least once before checking the condition.
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

//Break Statement: The break statement is used to exit a loop prematurely when a certain condition is met.
for (let i = 1; i <= 10; i++) {

  if (i === 5) {
    break;
  }

  console.log(i);
}

//Continue Statement: The continue statement is used to skip the current iteration of a loop and move to the next iteration.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

//Nested Loops: A nested loop is a loop inside another loop. The inner loop will be executed for each iteration of the outer loop.
for (let i = 1; i <= 3; i++) {

  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }

}

//for...of Loop: The for...of loop is used to iterate over iterable objects (like arrays, strings, etc.) and provides a simpler syntax.
let name = "JS";

for (let char of name) {
  console.log(char);
}

//for...in Loop: The for...in loop is used to iterate over the properties of an object.
let person = {
  name: "John",
  age: 30,
  city: "New York"
};  

for (let key in person) {
  console.log(key, person[key]);
}
