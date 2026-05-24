//if statement

let age =18;
if (age>=18){
    console.log("You are an adult.");
}

//ifelse statement

let age1=16;
if(age1>18){
    console.log("Not valid Voter");
}else{
    console.log("Valid Voter");
}

//elseif statement

let age2=18;
if(age2>18){
    console.log("Not valid Voter");
}else if(age2===18){
    console.log("Valid Voter");
}else{
    console.log("Not valid Voter");
}


//Ternary Operator

let age3=18;
let VoterStatus =(age3>=18)? "Valid Voter":"Invalid Voter";
console.log(VoterStatus);
