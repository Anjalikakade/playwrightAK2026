import {test,expect} from '@playwright/test'
import type {Locator} from '@playwright/test'

test("Pagination Table",async ({page})=>{

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")

    let rows:Locator[] = await page.locator("table[id='example'] tbody tr").all()
    //1.print all page data
    let HasPage=true;
    while(HasPage)
    {
        for(let row of rows)
        {
            console.log(await row.innerText())

        }
        const nextButton = page.locator("button:has-text('›')")
        //page.locator("button",{hasText:'›' })
        //const nextButton = page.locator("button[aria-label='Next']")
        const text = await nextButton.getAttribute('class')
        console.log("Attribute Value ....." + text)
        if(text?.includes('disabled'))
        {
            HasPage=false;
            
        }
        else
        {
            await nextButton.click()
        }
    }
    
});
test("Entry per Page",async ({page})=>{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
    let drop:Locator= page.locator("#dt-length-0")
    await drop.click();
    await drop.selectOption({label:'25'})
    let rows:Locator=  page.locator("table[id='example'] tbody tr")
    console.log("count is:" + await rows.count())
   await expect(rows).toHaveCount(25);

});

test("Search text",async ({page})=>{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
    await page.locator("#dt-search-0").fill("Yuri Berry");
    let rows:Locator[]=  await page.locator("table[id='example'] tbody tr").all()
    for(let row of rows)
    {
        if((await row.innerText()).includes("Yuri Berry"))
        {
            console.log("Serach Text is Present:")
        }
        else
            console.log("Not Present:")
    }
    await page.waitForTimeout(5000)

})