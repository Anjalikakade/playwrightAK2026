function occurenace(str:string)
{
    let m:Map<string,number>=new Map();
    for(let ch of str)
    {
        if(ch==' ')
        continue;
        m.set(ch,(m.get(ch) ?? 0)+1);
        
    }
    for(let [key,value] of m.entries())
    {
        console.log(`${key} : ${value}`)
    }
    
}
function main()
{
    let str="anjali aaa";
    occurenace(str);
}
main();

console.log("Try programiz.pro");