import {test,expect} from '@playwright/test';
import type {Locator} from '@playwright/test';

test("Mouse Actions",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("button:has-text('Point Me')").hover();
    //mouse over on mobile
    await page.locator("div[class='dropdown-content'] a:nth-child(1)").hover();

    //double click
    await page.locator("button[ondblclick='myFunction1()']").dblclick();
    const dblclickText = page.locator("input[id='field2']");
    await expect(dblclickText).toHaveValue("Hello World!");
  

    //drag and drop 
    let source:Locator=page.locator("div #draggable")
    let target:Locator=page.locator("div[id='droppable']")
    //await source.dragTo(target)

     
    //other way mouuse over then click and then target mouse over and then release

    await source.hover()
    await page.mouse.down();
    await target.hover();
    await page.mouse.up()
     await page.waitForTimeout(5000);
});