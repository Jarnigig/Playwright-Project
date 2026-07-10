import { expect, Page } from "@playwright/test";
import factoryGetter from "../utilities/getterFuntion";
import { companyLocator } from "../utilities/locators/companyLocators";

export class CompanyPage extends factoryGetter< ReturnType <typeof companyLocator>>{
    constructor(page:Page){
        super(page,companyLocator)
    }

    async fillCorrectDetails(){
        (await this.locators).companiesSidebarButton.click(),
        (await this.locators).addNewPersonBtn.click()
        const sidebar=(await this.locators).sidebar
        await expect(sidebar).toBeVisible(),
        (await this.locators).nameField.fill("Ash"),
        // (await this.locators).contactField.fill("")
        (await this.locators).countryField.fill("India"),
        (await this.locators).phoneField.fill("9876543210"),
        (await this.locators).emailField.fill("abc@gmail.com"),
        (await this.locators).submitBtn.click()
    }
}