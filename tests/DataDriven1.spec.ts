import {test,expect, chromium} from '@playwright/test'
import type {Locator} from '@playwright/test'


const dataset:string[]=["laptop",'smart','mobile'];
for(const item of dataset)
{
    test(`Search Product for ${item}`,async ({page})=>{

        await page.goto("https://demowebshop.tricentis.com/login")
        await page.locator("[name='q']").fill(item);

        await page.locator("input[value='Search']").first().click();
        await expect(page.locator("h2[class='product-title'] a").nth(0)).toContainText(item,{ignoreCase:true})
        
    })
}