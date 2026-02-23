let str = "I am in a pune city";
//output I am in a enup city
const a = str.split(" ")
const na = a.map((each) => each ==="pune"
? each.split("").reverse().join("")
: each);

console.log("New String : "+ na.join(" ") )
console.log("Try programiz.pro");