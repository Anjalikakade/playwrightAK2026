import {test,expect,Locator} from '@playwright/test'

test("Basic",async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/");
    console.log(await page.title())

    let products=await page.locator(".product-title a").allTextContents()
     console.log(await page.locator(".product-title a").nth(1).textContent()) //print randome
    //print all
    for(let p in products)
    {
        console.log(products[p])
    }
    //await page.waitForTimeout(5000)
    //position of 

let footer:Locator=page.locator("//div[@class='footer-menu'][3]//div[position()=6]")
await expect(footer).toHaveText("Apply for vendor account")

//normilize-space
await page.locator("//a[normalize-space()='Register']").click();

})