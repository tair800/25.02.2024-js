let n = [3, 5, 7, 10, 15]
sum = 0;
for (let i = 0; i < n.length; i++) {
    sum += n[i]

}
console.log(sum);

let m = [3, 2, 5, 9, 30, 45, 100, 35, 200]
bigNum = m[0];
for (let i = 0; i < m.length; i++) {
    if (m[i] > bigNum) {
        bigNum = m[i]
    }
}
console.log(bigNum);



let b = [3, 2, 5, 9, 30, 45, 100, 35]
sum = 0;
for (let i = 0; i < b.length; i++) {
    sum = b[0] + b[b.length - 1]
}
console.log(sum);




let r = [4, 6, 8, 9]
odd = 0;
even = 0;
for (let i = 0; i < r.length; i++) {
    if (r[i % 2] == 1) {
        odd++
    } else {
        even++
    }
}

console.log(`odd number: ${odd}, even number : ${even}`);


let p1 = 10
let p2 = 8
sumeven = 0;
if (p1 % 2 == 0 && p2 % 2 == 0) {
    sumeven = p1 + p2
}
console.log(sumeven);





let num1 = 5;
let num2 = 8;
let evencount = 0;
let oddcount = 0;
for (let i = num1; i < num2; i++) {
    if (i % 2 == 0) {
        evencount++
    }
    else {
        oddcount++
    }

}
console.log(evencount)
console.log(oddcount);


function isPowerofTwo(t) {
    if (t == 0) {
        return false
    }
    while (t > 1) {
        if (t % 2 !== 0) {
            return false
        }
        else {
            t /= 2
        }
    }
    return true;
}
console.log(isPowerofTwo(16));


function divideby3and7(n) {
    return n % 3 === 0 && n % 7 === 0;
}
console.log(divideby3and7(42));


let summary = 0;
let l = 50
let l2 = 100
if (l % 2 == 0 && l2 % 2 == 0) {
    summary = l + l2
} else {
    console.log("enter even number");

}
console.log(summary);



let reqem=10;
let reqem2=15;
let eveneded=0
for (let i = reqem; i < reqem2; i++) {
    if(i%2!=0){
        eveneded+=i
    }
    
}
console.log(eveneded);

let reqem3=10;
let reqem4=12;
let oddeded=0;
for (let i = reqem3; i < reqem4; i++) {
    if(i%2==0){
        oddeded+=i;
    }
    
}
console.log(oddeded);


let temprature=0;
switch (temprature) {
    case value:
        
        break;

    default:
        break;
}






