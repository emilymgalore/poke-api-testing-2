// eslint-disable-next-line max-lines-per-function
describe("Validate key information about Weedle From The Pokemon API", () => {
    beforeEach(() => {
        cy.request("https://pokeapi.co/api/v2/pokemon/13").as("weedle")
    })

    it("Validate the header", () => {
        cy.get("@weedle")
            .its("headers")
            .its("content-type")
            .should("contain", "application/json; charset=utf-8")
    })

    it("Validate the status code", () => {
        const TWO_HUNDRED = 200

        cy.get("@weedle")
            .its("status")
            .should("equal", TWO_HUNDRED)
    })

    it("Validate the pokemon's name", () => {
        cy.get("@weedle")
            .its("body.name")
            .should("equal", "weedle")
    })

    it("checks the height", () => {
        const THREE = 3

        cy.get("@weedle")
            .its("body.height")
            .should("equal", THREE)
    })

    it("checks the id", () => {
        const THIRTEEN = 13

        cy.get("@weedle")
            .its("body.id")
            .should("equal", THIRTEEN)
    })

    it("checks the number of different moves Weedle can do", () => {
        const FOUR = 4

        cy.get("@weedle")
            .its("body.moves.length")
            .should("equal", FOUR)
    })

    it("validate first move name", () => {
        cy.get("@weedle")
            .its("body.moves.0.move.name")
            .should("equal", "poison-sting")
    })

    it("validates first move url", () => {
        cy.get("@weedle")
            .its("body.moves.0.move.url")
            .should("equal", "https://pokeapi.co/api/v2/move/40/")
    })

    it("validates last move name", () => {
        cy.get("@weedle")
            .its("body.moves.3.move.name")
            .should("equal", "electroweb")
    })

    it("validates last move url", () => {
        cy.get("@weedle")
            .its("body.moves.3.move.url")
            .should("equal", "https://pokeapi.co/api/v2/move/527/")
    })

    it("validates the number of held items that Weedle has", () => {
        const ZERO = 0

        cy.get("@weedle")
            .its("body.held_items.length")
            .should("equal", ZERO)
    })

    it("validates fifth stat of base stats", () => {
        const FIFTY = 50

        cy.get("@weedle")
            .its("body.stats.5.base_stat")
            .should("equal", FIFTY)
    })

    it("validates order", () => {
        const SEVENTEEN = 17

        cy.get("@weedle")
            .its("body.order")
            .should("equal", SEVENTEEN)
    })
})
