//print 1 to 10

for (let i =1; i<=10;i++){
    console.log(i);
}

// print 10 to 1
for (let i=10; i>=1; i--){
    console.log(i);
}

// print even numbers between 1 to 20
for(let i=2; i<=20; i+=2){
    console.log(i);
}

//find sum of 1 to 100
let sum = 0;
for(let i=1; i<=100; i++){
    sum += i;
}
console.log(sum);

//print multiplication table of 5
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
