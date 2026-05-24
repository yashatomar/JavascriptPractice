let secretNumber = 4;
let attemmpts=0;

for(let i=1; i<=10; i++){
    attemmpts++;

    if(i === secretNumber){
        console.log(`Congratulations! You guessed the number ${secretNumber} in ${attemmpts} attempts.`);
        break;
    } else {
        console.log(`Attempt ${attemmpts}: Wrong guess. Try again!`);
    }
}

