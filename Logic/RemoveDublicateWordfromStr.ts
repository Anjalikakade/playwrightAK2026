function removeDublicateWord()
{
   let str:string="Testing is imp testing is";
   //abcds
   let a=str.split(" ")
   let s= new Set<String>();
   for(let each of a)
   {
       s.add(each.toLowerCase())
   }
   //convert set elemnet into Array to read as String 
  let newstr = Array.from(s).join(" ")
    console.log(" String: "+ str);
    console.log("New String: "+ newstr);
    
}
removeDublicateWord()
console.log("Try programiz.pro");