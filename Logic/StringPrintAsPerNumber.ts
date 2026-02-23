let str:string="is2 good0 pun1e"
let a=str.split(" ")
let na:String[]=[];
for(let each of a)
{
    let num = each.replace(/[^0-9]/g,"");
    let pos:number=Number(num);
    let word = each.replace(/[0-9]/g,"");
    //console.log(num);
    //console.log(word);
    na[pos]= word;
}
console.log(na.join(" "));
console.log("Try programiz.pro");