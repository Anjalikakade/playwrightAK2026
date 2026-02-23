//
let a=null;
let b;
console.log(a)  //null
console.log(b) // undefined

let c=undefined;
console.log(typeof(a))  //object
console.log(typeof(b))
console.log( "c vlaue :" + typeof c) // undefined

console.log(null == undefined) // true as both represent empty value
console.log(null === undefined) // false as both type is diffrent

let x=10;
let y;
console.log(" Mul value iss "+ x*y) //Not a number NaN

let x1=10;
let y1=null;
console.log(" Mul value is "+ x1*y1) //Zero

let param:String  = "jkn";
param = null;
//
console.log(0==undefined) //false
console.log(0==null) //false
console.log(""==undefined) //false
console.log(""==null) //false
console.log(false==undefined) //false