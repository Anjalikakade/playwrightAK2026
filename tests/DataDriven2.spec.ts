import {test,expect, chromium} from '@playwright/test'
import type {Locator} from '@playwright/test'


const dataset: string[][] = [ ["anjali28@gmail.com", "Anjali@123", "valid"],
                            ["abc@123.com", "wsx", "invalid"], 
                            ["", "", "invalid"] ];
for(const [email,pass,validity] of dataset)
{
    test(`Search Product for ${email}`,async ({page})=>{

        await page.goto("https://demowebshop.tricentis.com/login")
        await page.locator("//a[text()='Log in']").click()
        await page.locator("#Email").fill(email);
        await page.locator("#Password").fill(pass);
        await page.locator("input[value='Log in']").click()
        if(validity=='valid')
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