import {test,expect,Locator} from '@playwright/test'

test("xpath Neighbour",async ({page})=>{

    await page.goto("https://www.w3schools.com/html/html_tables.asp")
    //selft here /selft::td is optional
    let text =await page.locator("//td[normalize-space()='Germany']/self::td").textContent()
    expect(text).toBe("Germany")
    //parent
    let parent:Locator=page.locator("//td[normalize-space()='Germany']/parent::tr")
    console.log(await parent.allTextContents())
    expect(await parent.count()).toBeGreaterThan(0)
    //child 
    await expect (page.locator("//table[@id='customers']//tr[2]/child::td")).toHaveCount(3)

    //ancestor ::grands 
    await expect(page.locator("//td[text()='Germany']/ancestor::table")).toHaveAttribute('id','customers')
    //descendant
    let read:Locator = page.locator("//table[@id='customers']/descendant::tr[position()=5]")
    console.log(await read.allTextContents())
    //fowwloing sibling
    console.log(await page.locator("//td[text()='Maria Anders']/following-sibling::td").textContent())
    page.getByLabel("Name")
    
})