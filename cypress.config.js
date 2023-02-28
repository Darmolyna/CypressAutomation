const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v2vehs',
defaultCommandTimeout: 6000,

env: {
  url: "https://rahulshettyacademy.com",
  userId: "darmolyna",
  password: "1234"
},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
