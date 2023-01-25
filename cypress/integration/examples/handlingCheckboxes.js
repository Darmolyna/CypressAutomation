/// <reference types="Cypress" /> 

describe('Test Suite', function()
{
    it('Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')//.and is
        
        //used to replace writing moutiple should
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['option2','option3']) //selecting multiple checkboxes 
        //based on value
    })
})