import { expect, Page } from "@playwright/test";
import factoryGetter from "../utilities/getterFuntion";
import { peopleLocator } from "../utilities/locators/peopleLocator";

export default class PeoplePage extends factoryGetter<ReturnType <typeof peopleLocator>>{
    constructor(public page:Page){
        super(page,peopleLocator)
    }

    async userCreation(){
        await  this.locators.peopleSidebar.click()
        const page=await this.page.url();
        await expect(page).toBe("https://cloud.idurarapp.com/people");
        await  this.locators.addNewButton.click(),
        await  this.locators.firstName.fill("John"),
        await  this.locators.lastName.fill("Doe"),
        await  this.locators.country.fill("USA"),
        await  this.locators.phone.fill("9876543210"),
        await  this.locators.email.fill("johnDoe@gmail.com"),
        await  this.locators.submitButton.click()
    }
}
