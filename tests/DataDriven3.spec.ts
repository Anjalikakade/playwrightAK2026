import {test,expect, chromium} from '@playwright/test'
import type {Locator} from '@playwright/test'
import fs from 'fs';

//reading json data 
const jsonPath ="Utils\\inputData.json";
const dataset=JSON.parse(fs.readFileSync(jsonPath,'utf-8'))

//here dataset will read the araay in the araay format so we can direct read in For loop as [email,pass,validity]
for(const each of dataset)
{
    test(`Search Product for ${each.email}`,async ({page})=>{

        await page.goto("https://demowebshop.tricentis.com/login")
        await page.locator("//a[text()='Log in']").click()
        await page.locator("#Email").fill(each.email);
        await page.locator("#Password").fill(each.pass);
        await page.locator("input[value='Log in']").click()
        if(each.validity=='valid')
        {
            await expect(page.locator("a[href*='logout']")).toBeVisible({timeout:2000})
            await expect(page.locator(".topic-html-content-title h2")).toContainText('Welcome to our store')
            console.log("Verify for Valid..")

        }
        else{
            await expect(page.locator(".validation-summary-errors")).toContainText('Login was unsuccessful.')
            await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")
             console.log("InValid..")

        }

       
        
    })
}