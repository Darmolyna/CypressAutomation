/// <reference types="Cypress" /> 

describe('Test Suite', function()
{
    it('Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
    })

    //window:alert
    cy.on('window:alert', (str) => //fat pipe resolves Promise
    {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.on('window:confirm', (str) => 
    {
        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
})