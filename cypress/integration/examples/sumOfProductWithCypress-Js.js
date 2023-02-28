/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" />
import HomePage from '../pageObjects/homePage'
import ProductPage from '../pageObjects/productPage'

describe('TestHook', function()
{ 
    before(function()
    {
        // runs first before all test case in the block
        cy.fixture('example').then(function(data)
        {
            this.data = data //makes the data available everywhere... its more like a global variable
        })
    })

    it('Test Case', function()
    {
        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit(Cypress.env("url") + "/angularpractice/")
        homePage.getEditBox().type(this.data.name) //accessing name in fixure(example.json)
        cy.log(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name) //assertion
        homePage.getEditBox().should('have.attr', 'minlength', '2') //assertion
        homePage.getEntreprenuaur().should('be.disabled')
        homePage.getShopTab().click()

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        });

        productPage.checkout().click()

        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => { //resolving promise
            //because below code are non cypress commands they are javascript
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim
            sum = Number(sum) + Number(res) //converting to number in javascript
            //cy.log(res)
        }).then(function(){ //javascript is assynchronous, so we have to tell it to wait for above function
            cy.log(Number(sum))    //to fiish executing before printing the value of sum. otherwise, it will print 
        })                 // sum as 0 which was initialised earlier

        cy.get('h3 strong').then(function(element){ //comparing output and result
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim
            expect(Number(total)).to.equal(Number(sum))
        })

        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India').click()
        cy.get('.suggestions > ul > li > a').click()
        cy.get('.checkbox').click()
        cy.get('.ng-untouched > .btn').click()
        //Cypress.config('defaultCommandTimeout', 8000)

        //assertion1
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-),')
        
        //assertion2
        cy.get('.alert').then(function(element)
        {
            //expect(actualText.includes('Success')).to.be.true
        })
              
        //line 3 and 19 above is very important
        
    })
})