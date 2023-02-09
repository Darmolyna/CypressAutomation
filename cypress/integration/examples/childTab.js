/// <reference types="Cypress" /> 

describe('Test Suite', function()
{
    it('Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //vvyh
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        
    })
})