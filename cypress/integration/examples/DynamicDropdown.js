/// <reference types="Cypress" /> 

describe('Test Suite', function()
{
    it('Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === "India")
            {
                $el.click()
            }
        })
        
        cy.get('#autocomplete').should('have.value', 'India')
    })
})