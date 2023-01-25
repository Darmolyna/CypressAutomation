/// <reference types="Cypress" /> 

describe('Test Suite', function()
{
    it('Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })
})