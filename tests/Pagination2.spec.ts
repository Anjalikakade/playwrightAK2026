import {test,expect} from '@playwright/test'
import type {Locator} from '@playwright/test'

test("Pagination Table 2",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let rows:Locator[]= await page.locator("#productTable tbody tr").all()
    let PageNo:Locator=page.locator("ul[id='pagination'] li a")
    let count = await PageNo.count()
    console.log("count is :" + count )
    for(let i=0;i<count;i++)
    {
        if(i>0)
        {
           await PageNo.nth(i).click();
           console.log("Hii")
        }

        for(let row of rows)
        {
            let cell:Locator = row.locator("td")
            console.log(await cell.allInnerTexts())
            await cell.locator("input[type='checkbox']").check()

        }
    }
        

})