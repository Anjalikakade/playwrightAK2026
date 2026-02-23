import {test,expect} from '@playwright/test'
import type {Locator,Frame} from '@playwright/test'

test("Frames",async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    let frame1 =page.frame({url :'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //here locate frame by uing page.frame
    await frame1?.locator("[name='mytext1']").fill("Hellow")

    //locate frame by other approach
    const frame2 = page.frameLocator("[src='frame_2.html']")
    await frame2.locator("[name='mytext2']").fill("Second Frame")

    //count no of frames on a page 
    let c = page.frames()
    console.log("No of frames:" + c.length)
    //how to handle child frames
    let frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    let child:Frame[]=frame3?.childFrames();
    console.log(child.length)
    child[0]?.getByLabel('I am a human').check()

    await page.waitForTimeout(2000)
    


})