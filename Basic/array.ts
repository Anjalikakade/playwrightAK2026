let data:number[]=[20,50,60]
//by using Array keyword
let mixed:Array<any>=['yes',90,true,null,70]
let emp:Array<number | string >=['anjali',98,'kakade',98,54]
//iterate by using for In lopp
console.log("**** For In ***********") // access by index
for(let a in mixed)
{
    console.log(mixed[a])
}

console.log("**** For Of ***********") // access by value Not an index
for(let b of emp)
{
    console.log(b)
}

//tuple //with fixed data type and data
let tuple:[number,string,boolean,number,string]=[34,"ak",true,90,'kon']
console.log(tuple)

console.log("**** Array of tuple ***********")
let big:[number,string][]=[[34,"As"],[89,"yes"],[98,"bank"]]
console.log(big[2])
let b =big[1]
console.log(b[1])
