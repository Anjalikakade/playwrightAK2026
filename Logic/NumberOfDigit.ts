function noDigit(str:String)
{
    let digits =str.match(/\d/g);
    return digits ? digits.length :0;
}

const count =noDigit("anjali879879") ;
console.log("count is.." +count )
console.log("Try programiz.pro");