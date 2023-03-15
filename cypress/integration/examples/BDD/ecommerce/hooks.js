beforeEach( function(){ //before will load once, but before each will load for every test
    // runs first before all test case in the block
    cy.fixture('example').then(function(data)
    {
        this.data = data //makes the data available everywhere... its more like a global variable
    })
})