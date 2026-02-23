import {test,expect,Locator} from '@playwright/test'

test("static dropdown",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
     // Select by index (0-based) 
     await page.locator("#country").click()
     await page.locator("#country").selectOption({ index: 8 }); 
     //console.log(await page.locator("#country").innerText())
     // Verify dropdown has 10 options
      const options: Locator = page.locator("#country option"); 
      await expect(options).toHaveCount(10);

      //3.check if dropdown conatns Japan or not
      let dp = (await options.allTextContents()).map(text=>text.trim())
      console.log(dp)
      expect(dp).toContain('Japan')
      
      //select multiple value from dropdown
      //await page.locator("#colors").selectOption(["Red","green"])
      await page.locator("#colors").selectOption([{label:'Red'},{label:'Yellow'}]);
      //check drodown is sorted or not
      let list:string[] = (await page.locator("#animals option").allTextContents()).map(val=>val.trim())
      let original:string[]=[];
      original=[...list]; // do not change the original list 
      let sorted:string[]=[...list].sort();
      console.log("Original list: " + original)
      console.log("sorted list: " + sorted)

      expect(sorted).toEqual(original)

})

test("Find Dublicate",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let list:string[] = (await page.locator("#colors option").allTextContents()).map(val=>val.trim())
    console.log(list)
    const dublicate:string[]=[];
    const s=new Set<String>();
    for(let each in list)
    {
        if(s.has(list[each]))
        {
            dublicate.push(list[each])
        }
        else
        {
            s.add(list[each])
        }   
    }
    console.log(s)
    console.log("Dublicate list : "+ dublicate)

})