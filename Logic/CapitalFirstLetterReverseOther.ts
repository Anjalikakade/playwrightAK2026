let str ="pune is odd City";
let a=str.split(" ");

let na=a.map((value) =>{
    return value.slice(0,1).toUpperCase() + value.slice(1).split("").reverse().join("")
})

//if we used {} then use return word
console.log(na)
console.log("Try programiz.pro");