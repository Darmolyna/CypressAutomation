/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" />
import HomePage from '../../../pageObjects/homePage'
import ProductPage from '../../../pageObjects/productPage'

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage()
const productPage = new ProductPage()
let name


Given ('I open Ecommerce page', function(){ //you can use => if your function didnt have name
    //but mocha hooks does not support => operator
    cy.visit(Cypress.env("url") + "/angularpractice/")
})

When ('I add items to cart', function(){
    homePage.getShopTab().click()

    this.data.productName.forEach(function(element) {
        cy.selectProduct(element)
    });

    productPage.checkout().click()

})

When ('I validate the total prices', function()
{
    var sum =0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => { //resolving promise
        //because below code are non cypress commands they are javascript
        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim
        sum = Number(sum) + Number(res) //converting to number in javascript
        //cy.log(res)
    }).then(function(){ //javascript is assynchronous, so we have to tell it to wait for above function
        cy.log(Number(sum))    //to fiish executing before printing the value of sum. otherwise, it will print 
    })                 // sum as 0 which was initialised earlier

    cy.get('h3 strong').then(function(element){ //comparing output and result
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim
        expect(Number(total)).to.equal(Number(sum))
    })
})

Then ('Select the country submit and verify thank you', function(){
    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India').click()
        cy.get('.suggestions > ul > li > a').click()
        cy.get('.checkbox').click()
        cy.get('.ng-untouched > .btn').click()
        //Cypress.config('defaultCommandTimeout', 8000)

        //assertion1
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-),')
        
        //assertion2
        cy.get('.alert').then(function(element)
        {
            expect(actualText.includes('Success')).to.be.true
        })
})

When ('I fill the form details', function(dataTable){ //dataTable means accessing data from .feature file
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0]) //accessing name in ecommerce.feature
    homePage.getGender().select(dataTable.rawTable[1][1])
})


Then ('I validate the form behavior', function(){
    homePage.getTwoWayDataBinding().should('have.value', name) //assertion
    homePage.getEditBox().should('have.attr', 'minlength', '2') //assertion
    homePage.getEntreprenuaur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000)
})

Then ('I select the shop page', function(){
    homePage.getShopTab().click()
})
