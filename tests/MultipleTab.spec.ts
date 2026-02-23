import {test,expect, chromium} from '@playwright/test'
import type {Locator} from '@playwright/test'

test("Multiple tab",async ({})=>{

    const browser= await chromium.launch()
    const context =await browser.newContext()
    const page =await context.newPage()

    await page.goto("https://testautomationpractice.blogspot.com/")

//promise.all will take no of promises and return one promise 
     const childpage = await Promise.all([
    context.waitForEvent('page'),
    page.locator("button:has-text('New Tab')").click()])
     
    //count no of pages opened
    const pages =context.pages() // will return array
    console.log("No of Pages: " + pages.length)

    //await page.waitForTimeout(5000)


})