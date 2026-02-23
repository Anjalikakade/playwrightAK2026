import {test,expect, chromium} from '@playwright/test'
import type {Locator} from '@playwright/test'

test("login",async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    
    //aaproach one 
     expect(await page.screenshot()).toMatchSnapshot("Home.png");
     //approach two 
    console.log("Second way")
    await  expect(page).toHaveScreenshot();

    //element snapshot comparison 
    let logo = page.locator("img[alt='Tricentis Demo Web Shop']");
     expect(await logo.screenshot()).toMatchSnapshot("logo.png");
})