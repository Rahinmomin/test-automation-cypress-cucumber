///<reference types="Cypress" />
import HomePage from '../../page/HomePage'
import ProductPage from '../../page/ProductPage'

import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage()
const productpage = new ProductPage()

let name
Given('I open ECommerce Page',()=>
{
    cy.visit(Cypress.env('url')+"/angularpractice/")
})


When('I add items to Cart',function (dataTable)
{
    productpage.getShopTab()
    name=dataTable.rawTable[1][0]
    productpage.selectMobileProduct(dataTable.rawTable[1][0])
    productpage.selectMobileProduct(dataTable.rawTable[1][1])
    productpage.clickOnCheckout()
    
})

When('Validate the total prices',()=>
{
    productpage.validateProductTotal()
    productpage.clickCheckOutBtn()
    })

Then('select the country submit and verify Thankyou',()=>
    {
        productpage.typecountry()
        productpage.confirmCountry()
        productpage.tickCheckBox()
        productpage.clickPurchaseBtn()
        productpage.completionAlert()
    })


    //fill the form details
When('I fill the form details',function(dataTable)
    {
        name = dataTable.rawTable[1][0]
        homePage.getEditBox().type(dataTable.rawTable[1][0])
        homePage.getGender().select(dataTable.rawTable[1][1])
    })

Then('validate the forms behaviour',function()
    {
    homePage.GetTwoWayData().should('have.value',name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000)
    })

Then('select the Shop Page',()=>
    {
        homePage.getShopTab()
    })





   






