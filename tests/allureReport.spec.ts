import {test,expect, chromium} from '@playwright/test'
import type {Locator} from '@playwright/test'

test("URL",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")

})
test("title",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await expect(page).toHaveTitle('Demo Web Shop.')  // Demo Web Shop. Login

})

test("login",async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator("//a[text()='Log in']").click()
        await page.locator("#Email").fill("anjali28@gmail.com");
        await page.locator("#Password").fill("Anjali@123");
        await page.locator("input[value='Log in']").click()
})