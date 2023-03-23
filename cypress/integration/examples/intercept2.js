/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" />

describe('TestHook', function () {
    it('Test Case', function () {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo")

        //using the syntax    cy.intercept(method, url, staticResponse)... recommended when you want
        // to mock request
        cy.intercept( 'GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req) => {
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue((req)=>{
                //expect(req.statusCode).to.equal(401)
            })
        }).as("dummyUrl")
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyUrl')
    })
})