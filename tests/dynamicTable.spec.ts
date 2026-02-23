import {test,expect} from '@playwright/test'
import type {Locator} from '@playwright/test'

test("Dynamic Table",async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-table")
    let rows:Locator[]=await page.locator(".table-striped tbody tr ").all()
    let CPUname=''
    for(let row of rows)
    {
        if((await row.innerText()).includes("Chrome"))
        {
            CPUname= await row.locator("td:has-text('%')").innerText()
            
            
        }
        
    }
    console.log("CPU name:" + CPUname)
    let para= await page.locator("#chrome-cpu").innerText();
    console.log(para)
    expect(para).toContain(CPUname)
    await page.waitForTimeout(5000)
    

})