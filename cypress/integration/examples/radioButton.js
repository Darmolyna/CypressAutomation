/// <reference types="Cypress" /> 

describe('Test Suite', function()
{
    it('Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('[for="radio1"] > .radioButton').check().should('be.checked').should('have.value', 'radio1')
        
    })
})