import { Page } from "@playwright/test"
import { locators } from "./commonLocators"

export const signInLocators=(page:Page)=>({
    email:page.locator(locators.signIn.email),
    password:page.locator(locators.signIn.password),
    rememberMeCheckbox:page.locator(locators.signIn.rememberMeCheckbox),
    forgotPasswordLink:page.locator(locators.signIn.forgotPasswordLink),
    logInButton:page.locator(locators.signIn.logInButton),
    registerNowLink:page.locator(locators.signIn.registerNowLink)
})