//increment and decrement
let x=10;
let num:number=x++;
console.log(num);  // 10 first x will assign and then increment
console.log("x is:" + x)
let b =20;
let minus=--b;
console.log("decrement :"+minus); // 19 as it decrement forst and then assign
console.log("b is:" + b)
//ternary operator
let age=30;
let person:string= (age>18) ? "Adult" : "Minor"
console.log(`As age:${age} is greter than 18 so :` + person)
//or
console.log("As age:"+age+" is greter than 18 so :" + person)
