/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" />
//const neatCSV = require('neat-csv')
//let Productname

describe('TestHook', function () {
    it('is logged through local storage', /**async**/ function () {
        cy.LoginAPI().then(function(){
            //LoginAPI ia created in command.js
            cy.visit("https://rahulshettyacademy.com/client", 
            {
                onBeforeLoad : function(window){
                    //value of token is set in environment variable in command.js
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })

        //cy.get(".card-body b").eq(1).then(function(ele){
            //Productname = ele.add.text()
        //})

        cy.get('.card-body button:last-of-type').eq(1).click();
        cy.get("[routerlink*='cart']").click()
        cy.contains("Checkout").click()
        cy.get("[placeholder*='Country']").type("nig")
        cy.get(".ta-results button").each(($el, index, $list) =>{
            if($el.text === "Nigeria"){
                //if you want to perform action on any element you received through list then you
                //have to wrap the element first
                cy.wrap($el).click()
            }
        })
        cy.get(".action__submit").click({force: true})
        cy.wait(2000)
        cy.get(".order-summary button").click()


        //cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_blessing.csv")
       // .then(async function(){
            //const csv = await neatCSV(text)
            //console.log(csv)
            //const actualProductCSV = csv[0]["Product Name"]
            //expect(Productname).to.equal(actualProductCSV)
       // })
        //the line above(34) will not work bcos the code above to download the csv file is not working
        //just following prompt
        
    })
})