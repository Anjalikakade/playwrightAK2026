function uppercase(val:string[]):string[]
{
    let output:string[]=[];
    for(let each in val)
    {
        output[each]=val[each].toUpperCase()
    }
    return output;

}

let ip:string[]=["abc","lkm","kdn"]
console.log(uppercase(ip))
