
import {test,expect, chromium} from '@playwright/test'
import type {Locator} from '@playwright/test'
import AxeBuilder from '@axe-core/playwright';

test("login",async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")

    //1. find no of violation on page
    let access =new AxeBuilder({page}).analyze()
    console.log("No of Violation: " + (await access).violations.length);

    //2. find violation with specific Tar or rule 
    let accessWithT=new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    expect.soft((await accessWithT).violations.length).toEqual(0); // 2 violation is there wil tag

    //3. disable some rule and find violation
    let accessWithR = new AxeBuilder({page}).disableRules(['duplicate-id']).analyze();
    expect.soft((await accessWithR).violations.length).toEqual(0) // 4

});