import {test,expect,Locator} from '@playwright/test'

test("checkbox",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //1.select monday by getbylable
    let lable=page.getByLabel("Monday")
    expect(await lable.isChecked()).toBe(false)
    await lable.check()
    await expect(lable).toBeChecked()

    const day:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let dayLocator = day.map((index)=>page.getByLabel(index))

    /*//2.select all checkbox
    
    //use for loop to iterate
    for(let each of dayLocator)
    {
         await each.check()
         await expect(each).toBeChecked()
    }

    //3.uncheck last 3 checkbox 
    for(let each of dayLocator.slice(-3))
    {
        await each.uncheck()
        await expect(each).not.toBeChecked()
    }
    //4.select not selected and uncheck which was checked
    for(let d of dayLocator)
    {
        if(await d.isChecked())
        {
            await d.uncheck()
            await expect(d).not.toBeChecked();

        }
        else
        {
            await d.check()
            await expect(d).toBeChecked();
        }
    }*/

    //await page.waitForTimeout(6000)

    //5.select randome
    let index=[1,2,6];
    for(let i in index)
    {
        await dayLocator[i].check();
        await expect(dayLocator[i]).toBeChecked()
    }


   let select:Locator= page.locator(".form-control[id='country']")
   await select.selectOption("")
})