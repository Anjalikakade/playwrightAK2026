function reverseStr()
{
   let str:string="barclays campus";
   let rev=""
    for(let i=str.length-1;i>=0;i--)
    {
        rev=rev+str[i];
    }
    console.log("Reverse String: "+ rev);
    console.log(" String: "+ str);

    // way two
    let other =str.split("").reverse().join("")
     console.log("Reverse String: "+ other);
}
reverseStr()
console.log("Try programiz.pro");