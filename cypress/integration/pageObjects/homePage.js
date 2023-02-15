class HomePage
{
    getEditBox()
    {
        return cy.get(":nth-child(1) > .form-control")
    }
    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    getGender() 
    {
        return cy.get('select')
    }
    getEntreprenuaur()
    {
        return cy.get('#inlineRadio3')
    }
    getShopTab() 
    {
        return cy.get(':nth-child(2) > .nav-link')
    }

    selectProduct(){
        return cy.get('button.btn.btn-info')
    }
}
export default HomePage; //javascrip makes this class available to all other files in your framework 
// because you use the export keyword