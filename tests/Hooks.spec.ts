import {test,expect, chromium} from '@playwright/test'
import type {Locator,Page} from '@playwright/test'

let page:Page;

test.beforeAll("URL", async ({browser})=>{
    let context = await browser.newContext();
    page = await context.newPage()
    await page.goto("https://demoblaze.com/");
})
test.afterAll("Close",async ()=>{
    await page.close();
})

test.beforeEach("Login", async ()=>{
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("anjalikakade")
    await page.locator("#loginpassword").fill("anjali@123")
    await page.locator("button[onclick='logIn()']").click()
    await page.waitForTimeout(2000)

})
test.afterEach("Logout", async ()=>{
    await page.locator("#logout2").click()
})

//test 1 find No of Products 
test("Find No of product", async ()=>{
    let product:Locator[]= await page.locator("#tbodyid h4 a").all()
    console.log("No of Product :"+ product.length)
    expect(product.length).toBe(9);
});

//test 2 add one product into product list
test("Add to Cart", async ()=>{
    let product:Locator[]= await page.locator("#tbodyid h4 a").all()
    
    for(let each of product)
    {
        if((await each.innerText())==='Samsung galaxy s6')
        {
            await each.click();
            break;
        }
    }

    page.on("dialog",async (dialog)=>{
        expect(await dialog.message()).toContain("Product added.")
        await dialog.accept()
    })

    await page.locator("//a[text()='Add to cart']").click();
});