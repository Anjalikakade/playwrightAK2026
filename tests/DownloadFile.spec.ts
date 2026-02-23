import {test,expect} from '@playwright/test';
import type {Locator} from '@playwright/test';
import fs from 'fs';

test("Downalod the single file ",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#inputText").fill("Anjali");
    page.locator("button[id='generatePdf']").click()

    //Handle event while click on downalod 
    const [downaloded] = await Promise.all([
    page.waitForEvent('download'),
    page.locator("[id='pdfDownloadLink']").click()]);

    let downloadPath='Downloads/test.pdf';
     downaloded.saveAs(downloadPath)

      const check = fs.existsSync(downloadPath);
      expect(check).toBeTruthy();
        await page.waitForTimeout(5000)


});