/// <reference types="Cypress" /> 

describe('My First Test Suite', function()
{
    it('My First Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4) //should is the assertion type of chai
        //or
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        //or
        cy.get('.products .product').should('have.length', 4)

        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        //OR
        //cy.get(':nth-child(3) .product.action > button').click() //this failed

        cy.get('@productLocator').find('.product').each(($el, index, $list) => { //fat pipe resolves promise
          const vegname = $el.find('h4.product-name').text()
          if(vegname.includes('Cashews'))
          {
            cy.wrap($el).find('button').click();
          }
        })

//assert if logo text is correctly displayed
cy.get('.brand').should('have.text', 'GREENKART')


        //const logo =cy.get('.brand')xxxxxxxxxxx
        //cy.log(logo.text())
        //cypress cant do above, instead you do it using below (promise with THEN method)

        cy.get('.brand').then(function(logoelement){ //doing promise with then method
            cy.log(logoelement.text())
        })
    })
 
})