let str = "I am in a pune City";
//I ma ni a enup ytiC 
const a = str.split(" ")
const newArray =a.map((each)=>each.split("").reverse().join(""));

console.log("New String : "+ newArray.join(" ") )
console.log("Try programiz.pro");