/// <reference types="Cypress" /> 

describe('Test Suite', function()
{
    it('Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahulshettyacademy.com')

        cy.go('back')

        //or
        //cy.get('#opentab').then(function(el){
        //    const url = el.prop('href')
        //    cy.visit(url)
        //})
        //the second method above will not work  becuse the visit method is visting the url of another
        //domain... visit method only work on same domain

    })
})