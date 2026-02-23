function findNonR(str:string):string | null
{
    let m=new Map<string,number>();
    for(let ch of str)
    {
        if(ch==' ')
        continue;
        m.set(ch,(m.get(ch) ?? 0)+1)
    }
    //print map
    for(let [key,value] of m.entries())
    {
        if(value==1)
        {
            return key;
            break;
        }
    }
    return null
    
}
let str="barclays campus";
let firstL =findNonR(str)
if(firstL!==null)
{
    console.log("First non repeatating letter found:"+ firstL)
}
else
console.log("Not found..")
console.log("Try programiz.pro");