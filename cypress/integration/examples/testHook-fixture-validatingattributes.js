/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" />

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
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(":nth-child(1) > .form-control").type(this.data.name) //accessing name in fixure(example.json)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name) //assertion
        cy.get(":nth-child(1) > .form-control").should('have.attr', 'minlength', '2') //assertion
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click()
    })
})