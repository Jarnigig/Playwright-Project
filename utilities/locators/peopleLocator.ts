import { Page } from "@playwright/test";
import { locators } from "./commonLocators";

export const peopleLocator = (page: Page) => ({
    peopleSidebar: page.locator(locators.people.peopleSidebar),
    addNewButton: page.locator(locators.people.addNewButton),
    firstName: page.locator(locators.people.firstName),
    lastName: page.locator(locators.people.lastName),
    country: page.locator(locators.people.country),
    phone: page.locator(locators.people.phone),
    email: page.locator(locators.people.email),
    submitButton: page.locator(locators.people.submitButton)
})