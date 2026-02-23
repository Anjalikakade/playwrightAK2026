let i:number // global var
for(let i:number=1;i<=5;i++)  // it will allow and here i is refer to  local var
{
    console.log(i)

}
//case 2
console.log("***************")
let j:number // global var
for(j=1;j<=5;j++)  // it will allow and here j is refer to  t is global var
{
    console.log(j)

}
console.log(j) //op will 6 as it incremented at last step

//case 3
console.log("***************")
let k:number;
for(k=1;k<=6;k++); //semicolon at enf of for loop allowed 
console.log(k) // op is k=7

//break
console.log("******** break *******")
for(k=1;k<=5;k++)
{
    if(k==4)
        break;  // it will break and come out of the loop 
    console.log(k)
}

//continue
console.log("******** continue *******")
for(k=1;k<=5;k++)
{
    if(k==4)
        continue; // when condition match it just increment the loop 
    console.log(k)
}