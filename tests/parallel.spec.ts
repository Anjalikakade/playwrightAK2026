import {test,expect, chromium} from '@playwright/test'
import type {Locator} from '@playwright/test'


 test.describe.configure({mode:'default'})
 test("test1",()=>{
        console.log("test1...")
    });

    test("test2",()=>{
        console.log("test2...")
    });
    test("test3",()=>{
        console.log("test3...")
    });

    test("test4",()=>{
        console.log("test4...")
    })
    test("test5",()=>{
        console.log("test5...")
    })
    test("test6",()=>{
        console.log("test6...")
    })
    test("test7",()=>{
        console.log("test7...")
    })