import { Page } from "@playwright/test";
import { locators } from "./commonLocators";

export const companyLocator = async (page: Page) => ({
    companiesSidebarButton: await page.locator(locators.companies.addNewPersonBtn),
    addNewPersonBtn: await page.locator(locators.companies.addNewPersonBtn),
    sidebar: await page.locator(locators.companies.sidebar),
    nameField: await page.locator(locators.companies.nameField),
    contactField: await page.locator(locators.companies.contactField),
    countryField: await page.locator(locators.companies.countryField),
    phoneField: await page.locator(locators.companies.phoneField),
    emailField: await page.locator(locators.companies.emailField),
    submitBtn: await page.locator(locators.companies.submitBtn)
})