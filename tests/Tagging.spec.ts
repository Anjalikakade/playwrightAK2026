import {test,expect, chromium} from '@playwright/test'
import type {Locator} from '@playwright/test'

//approah one 
test("@regression approach 1",()=>{    // only regression 
    console.log("Regression Approach one....")
})

// test("@sanity @regression approach 1",()=>{    // both sanity 
//     console.log("Sanity and regression Approach one....")
// })

//approach two 
test("Approach two",{tag:'@sanity'},()=>{
    console.log("Sanity By Approach 2..-------")
})

test("Both",{tag:['@sanity','@regression']},()=>{
    console.log("Both Approach 2..-------")
})
