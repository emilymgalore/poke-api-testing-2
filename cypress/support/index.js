import "cypress-commands"
import "cypress-plugin-retries"
import "@testing-library/cypress/add-commands"

Cypress.Commands.add("visitCraigslistMiami", () => {
    cy.visit("https://miami.craigslist.org/")
})
