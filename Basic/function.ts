1.//parameter function
function add(a:number,b:number):number
{
    return a+b;
}
console.log(add(7,5))
2.//rest parameter :we can pass N no od parameter
function len(...ele:(number | string)[])
{
    console.log(ele.length);
}
len(2,3,"ang")
len(2,3,"ang",8,9,"kjh")
//3.default parameter function: can pass one default value
console.log("********* default *******")
function discount(price,rate:number=2)
{
    let dis = price* rate;
    console.log(dis)
}
discount(5,6);
discount(5);  // it will work as it will take defalut value

//4.optional parameter function : can pass any one paramter which we make as optional 
console.log("********* oprional *******")
function data(age:number,name:string,email?:string)
{
    console.log(age)
    console.log(name)
    if(email != undefined)
    {
        console.log(email)
    }
    
}
data(30,"son","123@gmail.com")
data(30,"son")  // iyt will work as third parameter is optional

//5 anonymous func
let sum=(a:number,b:number)=>
{
    return a+b
}
console.log(sum(50,20))
//or we can write in array function as well like 

let total=(c:number,d:number):number=>c+d;
console.log(total(7,8))


