import {test,expect, chromium} from '@playwright/test'
import type {Locator} from '@playwright/test'

test("Authentication of URL",async ({})=>{

     
    const browser= await chromium.launch()
    const context =await browser.newContext({httpCredentials:{username:'admin',password:'admin'}})
    const page =await context.newPage()

    //approch 1 
    //await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")

    //approach two add hettpscrendentials to context and use normal URL
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
    console.log(await page.title())
    const text = await page.locator("div[class='example'] p").innerText()
    console.log(text)
    expect(text).toContain("Congratulations! ")
    await page.waitForTimeout(2000)


})