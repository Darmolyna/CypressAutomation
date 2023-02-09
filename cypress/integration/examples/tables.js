/// <reference types="Cypress" /> 

describe('Test Suite', function()
{
    it('Test Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('table[name ="courses"] tbody tr td:nth-child(2)').each(($el, index, $list) => { 
            const text = $el.text()
            if(text.includes("Master Selenium Automation in simple Python Language")){
                //NEXT can only be used on GET
                cy.get("table[name ='courses'] tbody tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                    const pricetext = price.text()
                    //text is not a cypress method, its jQuery... so we have to resolve promise using above
                    expect(pricetext).to.equal('25')
                })
            }

        })
    })
})