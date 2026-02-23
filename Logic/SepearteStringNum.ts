let a:(string | number)[] =['anjali',345,'barclays',897,987]
//let a="anjali567";
//output anjali barclays
// 345 897 987
let str:string[]=[];
let num:number[]=[];
for(let each of a)
{
    if(typeof(each)==="string")
    {
        str.push(each);
    }
    else
    num.push(each);
    
}
console.log("String array: " + str.join(" "))
console.log("Number array: " + num.join(" "))
console.log("Try programiz.pro");