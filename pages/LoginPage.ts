import { expect, Page } from '@playwright/test';
import factoryGetter from '../utilities/getterFuntion';
import { signInLocators } from '../utilities/locators/signInLocators';

export default class LoginPage extends factoryGetter< ReturnType <typeof signInLocators>>{
    constructor(public page:Page){
        super(page,signInLocators)
    }

    async login(){
        await this.locators.email.fill('sqlih40643@minitts.net')
        await this.locators.password.fill('test@123')
        await this.locators.rememberMeCheckbox.check()
        await this.locators.logInButton.click()
        const logo=await this.page.locator("//div[@class='logo']/img[@loading='eager']")
        await expect(logo).toBeVisible()
    }
}