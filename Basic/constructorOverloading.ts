class calculator
{
    constructor(); //defaultconstructor
    constructor(a:number,b:number);
    //implementation
    constructor(a?:number,b?:number)
    {
        if(a!=undefined && b!==undefined)
        {
            console.log("sum of a &b :" + (a+b))
        }
        else
            console.log("Default constrctor..")

    }

    //method overloading 
    add(a:number,b:number):number;
    add(a:number,b:number,c:number):number;

    add(a:number,b:number,c?:number):number
    {
        if(c!==undefined)
        {
            return a+b+c
        }
        return a+b

    }
}
let c=new calculator();
let c1=new calculator(2,8)
console.log(c.add(4,5))
console.log(c.add(10,10,10))