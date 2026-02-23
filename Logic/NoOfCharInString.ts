function find(str:string, find:string):number
{
    
    let count:number =0;
    for(let each of str)
    {
        if(each==find)
        count++;
    }
    return count;
    
}
let str="anjali shinde"
const count = find(str,'a')
console.log("count is:" + count)
console.log("Try programiz.pro");