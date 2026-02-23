
import {test,expect, chromium} from '@playwright/test'
import type {Locator} from '@playwright/test'

test.describe("Group1",()=>{
    test("test1",()=>{
        console.log("test1...")
    });

    test("test2",()=>{
        console.log("test2...")
    });
})

test.describe("Group2",()=>{

    test("test3",()=>{
        console.log("test3...")
    });

    test("test4",()=>{
        console.log("test4...")
    })
})