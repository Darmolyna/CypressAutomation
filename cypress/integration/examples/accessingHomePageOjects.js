/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" />
//import cypress from 'cypress'
import HomePage from '../pageObjects/homePage'
import ProductPage from '../pageObjects/productPage'

describe('TestHook', function()
{ 
    before(function()
    {
        // runs first before all test case in the block
        cy.fixture('example').then(function(data)
        {
            this.data = data //makes the data available everywhere... its more like a global variable
        })
    })

    it('Test Case', function()
    {
        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homePage.getEditBox().type(this.data.name) //accessing name in fixure(example.json)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name) //assertion
        homePage.getEditBox().should('have.attr', 'minlength', '2') //assertion
        homePage.getEntreprenuaur().should('be.disabled')
        homePage.getShopTab().click()

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })
        productPage.checkout().click()       
    })
})