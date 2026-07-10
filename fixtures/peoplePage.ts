import {test as base, expect} from "@playwright/test"
import PeoplePage from "../pages/PeoplePage"

type Fixture={
    peoplePage:PeoplePage
}

export const test= base.extend<Fixture>({
    peoplePage:async({page},use)=>{
        await use(new PeoplePage(page))
    }
})

export {expect}

