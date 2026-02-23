function removeDublicateWord()
{
   let str:string="tes#$sti45ng&*";
   //testing
   let newstr = str.replace(/[^a-zA-Z0-9]/g,"")
   
   //convert set elemnet into Array to read as String 
    console.log(" String: "+ str);
    console.log("New String: "+ newstr);
    
}
removeDublicateWord()
console.log("Try programiz.pro");