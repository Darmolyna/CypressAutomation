/// <reference types="Cypress" /> 

describe('Test Suite', function()
{
    it('Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')

    })
})