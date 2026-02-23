import {test,expect} from '@playwright/test';
import type {Locator} from '@playwright/test';

test("keyboard Actions",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let input:Locator=page.locator("#input1");
    //focus on input box
    await input.click(); // await input.focus();
    //type in input box
    await page.keyboard.type("Hello..");
    //select text
    await page.keyboard.press('Control+A');
    //or 
    //await page.keyboard.down("control");
    //await page.keyboard.press("A");
    //await page.keyboard.up("control");

    //copy text
    await page.keyboard.press('Control+C');

    //select input box 2 so press Tab two times
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    //copy text 
    await page.keyboard.press('Control+V');

    //select input box 3 so press Tab two times
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    //copy text 
    await page.keyboard.press('Control+V');
})