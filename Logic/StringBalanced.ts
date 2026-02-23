function check(str:string):boolean
{
    let count=0;
        
        for(let ch of str)
        {
            if(ch =='(' || ch=='{' || ch=='[')
            {
                count++;
            }
            else if(ch ==')' || ch=='}' || ch==']')
            {
                count --;
            }
            if(count < 0)
            return false;
        }
        return count ==0; // return true or false
}
 let str:string ="(an{)lk}([])[";
       let result:boolean= check(str);
       if(result)
       {
           console.log("is a balanced:");
       }
       else
        console.log("Not a balanced:");
console.log("Try programiz.pro");