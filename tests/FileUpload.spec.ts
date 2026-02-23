import {test,expect} from '@playwright/test';
import type {Locator} from '@playwright/test';

test("upload the single file ",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    let filepath="C:\\Users\\Dhananjay Sarak\\OneDrive\\Desktop\\Anjali S\\Resume\\Upload.pdf"
    await page.locator("#singleFileInput").setInputFiles(filepath);
    await page.locator("button:has-text('Upload Single File')").click();
    let test = await page.locator("#singleFileStatus").textContent();
    expect(test).toContain("Upload.pdf")
    
    await page.waitForTimeout(5000)
})

test.only("upload the multiple file ",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    let filepath="C:\\Users\\Dhananjay Sarak\\OneDrive\\Desktop\\Anjali S\\Resume\\Upload.pdf";
    let filepath2="C:\\Users\\Dhananjay Sarak\\OneDrive\\Desktop\\Anjali S\\Resume\\File2.pdf";
    await page.locator("#multipleFilesInput").setInputFiles([filepath,filepath2]);
    await page.locator("button:has-text('Upload Multiple Files')").click();
    let test = await page.locator("#multipleFilesStatus").textContent();
    expect(test).toContain("Upload.pdf")
    expect(test).toContain("File2.pdf")
    
    await page.waitForTimeout(5000)
})