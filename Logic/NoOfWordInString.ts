function find(str:string, find:string):number
{
    let a = str.split(" ")
    let count:number =0;
    for(let each of a)
    {
        if(each.toLowerCase()==find.toLowerCase())
        count++;
    }
    return count;
    
}
let str="pune is good city. Pune Is no one is"
const count = find(str,'is')
console.log("count is:" + count)
console.log("Try programiz.pro");