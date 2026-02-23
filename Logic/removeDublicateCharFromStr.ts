function removeDublicateChar()
{
   let str:string="abcaaadsc";
   //abcds
   let s= new Set<String>();
   for(let ch of str)
   {
       s.add(ch)
   }
   //convert set elemnet into Array to read as String 
   let newstr = Array.from(s).join("");
   console.log(" String: "+ str);
    console.log("New String: "+ newstr);
    
}
removeDublicateChar()
console.log("Try programiz.pro");