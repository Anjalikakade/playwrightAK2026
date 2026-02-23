import {test,expect} from '@playwright/test'
import type {Locator} from '@playwright/test'

test("Static table",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    let rows:Locator = page.locator("[name='BookTable'] tbody tr")
    //find all rows 
    const count = await rows.count()
    console.log("Number of rows: "+ count)
     console.log("Number of Columns: "+ await rows.locator("th").count())

     //print table data expect header
     let allData:Locator[]=await rows.all()
     for(let each of allData)
        {
            let rowData=await each.locator("td").allInnerTexts()
            console.log(rowData)
        } 

        //print BookName for Mukesh Author
        const MukeshBook:String[]=[];
        for(let i=0;i<count;i++)
        {
            let cells:(string | number )[]=await rows.nth(i).locator("td").allInnerTexts()
            let author=cells[1];
            let book:string =cells[0]
            if(author==='Mukesh')
            {
                console.log(author + ": " +book)
                MukeshBook.push(book)
            }
            
        }
        expect(MukeshBook).toHaveLength(2)

        //find sum of all book
        let allData1:Locator[]=await rows.all()
        let sum :number=0
     for(let each of allData1.slice(1))
        {
            let rowData=await each.locator("td").allInnerTexts()
            let price = rowData[3]
            sum = sum + parseInt(price)
            
        } 
        console.log("Total Book Sum is :" +sum)
})