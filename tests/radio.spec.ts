import {test,expect,Locator} from '@playwright/test'

test("Radio Button",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   let name:Locator= page.locator("#name")
   await expect(name).toBeVisible()
   await expect(name).toBeEnabled()
   await name.fill("John")
    // read enter text
    let value = await name.inputValue() 
    console.log(value)
    expect(value).toBe("John")

    //check button
    let button=page.locator("#male")
    await expect(button).not.toBeChecked()
    await button.check()  //button check
    await expect(button).toBeChecked()
   

})