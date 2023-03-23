/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" />

describe('TestHook', function () {
    it('Test Case', function () {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo")
    
        //using the syntax     cy.intercept(url, staticResponse)... recommended when you want
        // to mock response
        cy.intercept({
            method: 'GET', //from  developer tool network tab fetch/xhr
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty' //from  developer tool network tab
        }, 
        { 
            //Responseobject 
            statusCode : 200, 
            body : //values of body copied from response in dev/oper tool or postman
            [            
                {
                    "book_name": "RestAssured with java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }
            ]
        }).as('bookretrievals')//giving the intercept method variable name bookretrievals

        cy.get("button[class='btn btn-primary']").click()
        // we are making the test synchronous so that cypress will wait untill 
        //our mocked value is parsed before cotinuing... reason why we gave it a variable name above
        cy.wait('@bookretrievals').then(({request,response})=> 
        {
            cy.get('tr').should('have.length', response.body.length+1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})