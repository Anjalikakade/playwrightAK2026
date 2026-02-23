let str="welcome to barclays";
//output : emoclew to barclays
//split array into two part
const a =str.split(" ");
//for reverse convert first word into charachter array and then join as string

const f =a.map((word,index)=>index===0
? word.split("").reverse().join("") 
: word  ).join(" ");
console.log("String is : "+ str);
console.log("Expected is : "+ f);
console.log("Try programiz.pro");

//other way 
const first:any[] = a.slice(0,1);
const other = a.slice(1,a.length)
console.log("Other Way: " +first[0].split("").reverse().join("") +" "+ other.join(" "))