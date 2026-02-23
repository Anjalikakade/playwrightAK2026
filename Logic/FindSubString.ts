// Online Typescript Editor for free
// Write, Edit and Run your Typescript code using TS Online Compiler

function findSub(str:string,sub:string):boolean
{
    if(str.includes(sub))
    {
        return true;
    }
    return false;
}
const str ="anjali is in pune ";
let check=findSub(str,"no")
if(check)
{
    console.log("sub String is present")
}
else
console.log("No present..")
