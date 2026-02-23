function find(str:string)
{
let m = new Map<String,number>();
m.set('a',0);
m.set('e',0);
m.set('i',0);
m.set('o',0);
m.set('u',0);
let count=0;
for(let ch of str)
{
    if(m.has(ch))
    {
        m.set(ch,(m.get(ch) ?? 0)+1)
    }
}
    //print
    for(let[key,value] of m.entries())
    {
        if(value >=1 )
        {
            count ++;
        console.log(`${key} : ${value}`);
        }
    }

console.log(count)
}
let str:string="anjali";
find(str);
console.log("Try programiz.pro");