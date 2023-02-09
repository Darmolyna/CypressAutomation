/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" />
//import 'cypress-iframe'
//import { data } from 'cypress/types/jquery'

describe('TestHook', function()
{ 
    before(function()
    {
        // runs first before all test case in the block
        cy.fixture('example').then(function(data)
        {
            this.data = data //this keyword makes the data available everywhere... its more like a global variable
        })
    })

    it('Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(2) > .nav-link').click()
        //cy.get('h4.card-title').each(($el, index, $list) => { 
           // if ($el.text().includes('blackberry')){
                //cy.get('button.btn.btn-info').eq(index).click()
           // }
        //})

        //above was commented out bcos it is now written in command.js file... then it is now 
        //replaced with below
        cy.selectProduct('Blackberry')
        cy.selectProduct('Nokia Edge')
    })
})