import {test,expect, chromium} from '@playwright/test'
import type {Locator} from '@playwright/test'

test("Pop Up ",async ({})=>{

    const browser= await chromium.launch()
    const context =await browser.newContext()
    const page =await context.newPage()

    await page.goto("https://testautomationpractice.blogspot.com/")
    
     await Promise.all([
    context.waitForEvent('page'),
    page.locator("button:has-text('Popup Windows')").click()])

    //no of pop up 
    const tabs=await context.pages()
    console.log("No of tab: "+ tabs.length)
    console.log(await tabs[1]?.title())
    console.log(await tabs[2]?.title())
    for(let each of tabs)
    {
        if( (await each.title()).includes('Playwright'))
        {
            await each.locator("[class='getStarted_Sjon']").click()
            await each.close()
            await each.waitForTimeout(2000)
        }
    }
    
    page.waitForLoadState('')

});