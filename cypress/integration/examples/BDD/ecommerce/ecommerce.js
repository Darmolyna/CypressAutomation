/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" />
import HomePage from '../../../pageObjects/homePage'
import ProductPage from '../../../pageObjects/productPage'

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage()
const productPage = new ProductPage()
let name


Given('I open Ecommerce page', function () { //you can use => if your function didnt have name
    //but mocha hooks does not support => operator
    cy.visit(Cypress.env("url") + "/angularpractice/")
})

When('I add items to cart', function () {
    homePage.getShopTab().click()

    this.data.productName.forEach(function (element) {
        cy.selectProduct(element)
    });

    productPage.checkout().click()

})

When('I validate the total prices', function () {
    var sum = 0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {


        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)

    }).then(function () {
        cy.log(sum)
    })
    cy.get('h3 strong').then(function (element) {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)

    })
})

Then('Select the country submit and verify thank you', function () {
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({ force: true })
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function (element) {
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true
    })
})

When('I fill the form details', function (dataTable) { //dataTable means accessing data from .feature file
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0]) //accessing name in ecommerce.feature
    homePage.getGender().select(dataTable.rawTable[1][1])
})


Then('I validate the form behavior', function () {
    homePage.getTwoWayDataBinding().should('have.value', name) //assertion
    homePage.getEditBox().should('have.attr', 'minlength', '2') //assertion
    homePage.getEntreprenuaur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000)
})

Then('I select the shop page', function () {
    homePage.getShopTab().click()
})
