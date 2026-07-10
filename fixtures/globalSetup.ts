import {test as base} from "@playwright/test";
import LoginPage from "../pages/LoginPage";

type Fixture={
    loginPage:LoginPage;
}

export const test=base.extend<Fixture>({
    loginPage:async({page},use)=>{
        await use(new LoginPage(page))
    }
})

