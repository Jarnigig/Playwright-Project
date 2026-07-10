import {Page} from "@playwright/test"

export default class factoryGetter<O extends Object>{
    protected locators: O

    constructor(page:Page,factoryGet:(page:Page)=>O){
        this.locators=new Proxy(factoryGet(page),{
            get(element:any,prop:string){
                if(!(prop in element)){
                    throw new Error(`${prop} is not present`)
                }

                return element[prop]
            }
        })
        
    }
}