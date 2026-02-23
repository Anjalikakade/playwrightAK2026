import {test,expect, chromium} from '@playwright/test'
import type {Locator} from '@playwright/test'

test("Multiple window",async ({browser})=>{

    const context =await browser.newContext();
    const parentpage =await context.newPage();

    //open browser 
    await parentpage.goto("https://rahulshettyacademy.com/AutomationPractice/");

    


})