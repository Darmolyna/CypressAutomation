class ProductPage
{
    checkout()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
}
export default ProductPage; //javascript makes this class available to all other files in your framework 
// because you use the export keyword