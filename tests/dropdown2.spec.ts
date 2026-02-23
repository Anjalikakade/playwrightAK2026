import {test,expect} from '@playwright/test'
import type { Locator } from '@playwright/test'

test("Dynamic dropdown",async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("[placeholder='Username']").fill("Admin")
    await page.locator("[name='password']").fill("admin123")
    await page.getByRole('button',{name:'Login'}).click()

    await page.locator("//span[text()='PIM']").click()

    await page.locator("form i").nth(2).click();

    let options:Locator = page.locator("div[role='listbox'] span")
    await page.locator("div[role='listbox'] span").first().waitFor()
    const count:number = await options.count()
    //await expect(options).toHaveCount(28)

    let list =(await options.allTextContents()).map(text=>text.trim())
    console.log(list)

    //select Sales Representative'
    for(let i=0;i<count ;i++)
    {
        let text =await options.nth(i).innerText();
        console.log(text)
        if(text==='Automation Tester')
        {
            console.log(text)
            await options.nth(i).click()
            break;
        }

    }
    await page.waitForTimeout(3000);
})
