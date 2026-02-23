
import {Page, type Locator} from "@playwright/test";
import { count } from "node:console";
import type { promises } from "node:dns";
class register
{
     page:Page;
     private readonly register:Locator;
     private readonly username :Locator
     private readonly fname :Locator
     private readonly lname :Locator
     private readonly email :Locator
     private readonly country :Locator
     private readonly password :Locator
     private readonly RegLink:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.register=page.locator("div a[href*='register']");
        this.username =page.locator("input-username")
        this.fname=page.locator("#input-firstname");
        this.lname=page.locator("#input-lastname")
        this.email=page.locator("input-email");
        this.country=page.locator("#input-country")
        this.password=page.locator("input-password")
        this.RegLink=page.locator("div[id='button-register'] button:has-text('Register')");

    }

    async clickRegister():Promise<void>
    {
       await  this.register.click();

    }
    async setRegisterData()
    {
        await this.username.fill("anjalikakade")
        await this.fname.fill("anjali")
        await this.lname.fill("kakade")
        await this.email.fill("anjalikakade@gamil.com");

        //select country
        await this.country.click();
        await this.country.selectOption("Colombia")
        await this.password.fill("anjali@123")
        await this.RegLink.click();
    }

}