import { test } from "../../fixtures/globalSetup"

test("Global Setup",async({loginPage})=>{
    console.log("Starting Global Setup")

    await loginPage.page.goto("https://cloud.idurarapp.com")
    await loginPage.login()

    await loginPage.page.context().storageState({ path: '../../.auth/user.json' as string });

    console.log("Global Setup Completed")
})