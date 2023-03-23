/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" />

describe('TestHook', function () {
    it('Test Case', function () {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "book_name": "Learn Appium Automation with java",
            "isbn": "bcdsss",
            "aisle": "23s7",
            "author": "John foe"
        }).then(function(response){
            //expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })
    })
})