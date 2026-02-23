import {test,expect} from '@playwright/test'
import type { Locator } from '@playwright/test';

test('flipkart',async ({page})=>{

    await page.goto("https://www.flipkart.com/")
    await page.locator("[name='q']").fill("smart");

    const list:Locator=page.locator("ul li")
    console.log(list)
    await page.locator("ul li div span[class='ryASxo']").first().waitFor()
    let count:number = await list.count()
    console.log("count is :" + count)

    //select any one from the dropdown 
    console.log("********")
    for(let i =0;i<count;i++)
    {
        let text = await list.nth(i).innerText();
        console.log(text)
        if(text=='smart watch boat')
        {
            await list.nth(i).click()
            break;

        }
    }
})