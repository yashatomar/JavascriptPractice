/*Mini Project: Simple Login System

Requirements
Create variables:
username
password

Check:
If both match correct values
Print:
"Login Successful"
OR "Invalid Credentials"

Use:
if...else
&&
===

Bonus:
Add admin role check */

const username="Yasha";
const ispassword="Y123";

let EnterUsername=prompt("Enter your username:");
let EnterPassword=prompt("Enter your password:");

if(EnterUsername===username && EnterPassword===isPassword){  
    console.log("Login Successful");
}else{
    console.log("Invalid Credentials");

}

