import {test,expect} from '@playwright/test';
import type {Locator} from '@playwright/test';

test("Mouse Actions",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // in playwright scolling will done automatically for few actions like click type etc
    let list: Locator =page.locator("#footer-2-1 ul li").nth(1);
    await expect(list).toBeVisible();
    await list.click();
    

});
test("dropdown scroll",async ({page})=>{
    await page.goto("https://datatables.net/examples/basic_init/scroll_xy.html")
    //scroll automatically verically 
    let text = await page.locator("table[id='example'] tbody tr:nth-child(10) td").nth(1).textContent();
    expect(text).toEqual("Kelly");

})
test("Infine scrolling",async ({page})=>{

    test.slow();
    await page.goto("https://www.booksbykilo.in/new-books");

    let startheight=0;
    while(true)
    {
        await page.evaluate(()=>{
            window.scroll(0,document.body.scrollHeight);

        })
        //scroll till end of page
        const curHeight = await page.evaluate(()=>{
            return document.body.scrollHeight
        })
        console.log("Prev Height: "+ startheight);
        console.log("Current Height: "+ curHeight);
        if(startheight===curHeight)
            {
                console.log("end of page reached")

            }
    }
    
})
test.only("scrolling to specific Element",async ({page})=>{

    test.slow();
    await page.goto("https://www.booksbykilo.in/new-books");

    let startheight=0;
    let foundbook= false;
    while(true)
    {
        let booknames =await page.locator("#productsDiv div h3").allTextContents();
        if(booknames.includes('Simpsons Comics Wingding'))
        {
            foundbook=true;
            break
        }
        await page.evaluate(()=>{
            window.scroll(0,document.body.scrollHeight);

        })
        //scroll till end of page
        const curHeight = await page.evaluate(()=>{
            return document.body.scrollHeight
        })
        console.log("Prev Height: "+ startheight);
        console.log("Current Height: "+ curHeight);
        if(!foundbook)
        {
            console.log("Book not found...!")
        }
        
    }
    
})
