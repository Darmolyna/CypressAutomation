/// <reference types="Cypress" /> 

describe('Test Suite', function()
{
    it('Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //show method should be used on immediate parent of hidden element
        
        //cy.get('.mouse-hover-content').invoke('show')
       // cy.contains('Top').click()

       cy.contains('Top').click({force: true})
        //i commented the above step to force click on the ement without showing it 
        //or opening the menu before click
    })
})