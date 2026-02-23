import {test,expect} from '@playwright/test'
import type {Locator} from '@playwright/test'

test("Alter",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',dialog=>{
        console.log(dialog.message())
       let value =  dialog.type()
       expect(value).toContain('alert')
         dialog.accept();
    })
    await page.locator("button[id='alertBtn']").click()
    await page.waitForTimeout(5000)

})

test("confirmation alert",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
      page.on('dialog',dialog=>{
        console.log(dialog.message())
       let value =  dialog.type()
       console.log(value)
       expect(value).toContain('confirm')
         dialog.dismiss();
    })
    await page.locator("button[id='confirmBtn']").click()

    expect(page.locator("p[id='demo']")).toContainText("You pressed Cancel!")
    await page.waitForTimeout(5000)
})
test("promt alert",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
      page.on('dialog',dialog=>{
        console.log(dialog.message())
       let value =  dialog.type()
       console.log(value)
       expect(value).toContain('prompt')
         dialog.accept("John");  // enter new value 
    })
    await page.locator("button[id='promptBtn']").click()

    expect(page.locator("p[id='demo']")).toContainText("Hello John! How are you today?")
    await page.waitForTimeout(5000)
})