import { test } from "../../fixtures/peoplePage";

test.describe("People Suit",()=>{

    test.beforeEach(async ({ page }) => {
  await page.goto('https://cloud.idurarapp.com/');
});

    test("Test and verify the success creation of the People",async({peoplePage})=>{
        await peoplePage.userCreation()
    })
})