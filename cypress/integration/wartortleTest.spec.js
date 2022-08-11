// eslint-disable-next-line max-lines-per-function
describe("Validates Key Information About Wartortle From The Pokemon API", () => {
    beforeEach(() => {
        cy.request("https://pokeapi.co/api/v2/pokemon/wartortle").as("wartortle")
    })

    it("Validate the header", () => {
        cy.get("@wartortle")
            .its("headers")
            .its("content-type")
            .should("contain", "application/json; charset=utf-8")
    })

    it("Validate that the request response was successful, using the status code", () => {
        const TWO_HUNDRED = 200

        cy.get("@wartortle")
            .its("status")
            .should("equal", TWO_HUNDRED)
    })

    it("Validate the pokemon's name", () => {
        cy.get("@wartortle")
            .its("body.name")
            .should("equal", "wartortle")
    })

    it("checks the height", () => {
        const TEN = 10

        cy.get("@wartortle")
            .its("body.height")
            .should("equal", TEN)
    })

    it("checks the id", () => {
        const EIGHT = 8

        cy.get("@wartortle")
            .its("body.id")
            .should("equal", EIGHT)
    })

    it("checks the number of different moves Wartortle can do", () => {
        const EIGHT_FIVE = 85

        cy.get("@wartortle")
            .its("body.moves.length")
            .should("equal", EIGHT_FIVE)
    })

    it("validate first move name", () => {
        cy.get("@wartortle")
            .its("body.moves.0.move.name")
            .should("equal", "mega-punch")
    })

    it("validates first move url", () => {
        cy.get("@wartortle")
            .its("body.moves.0.move.url")
            .should("equal", "https://pokeapi.co/api/v2/move/5/")
    })

    it("validates last move name", () => {
        cy.get("@wartortle")
            .its("body.moves.84.move.name")
            .should("equal", "flip-turn")
    })

    it("validates the last move url", () => {
        cy.get("@wartortle")
            .its("body.moves.84.move.url")
            .should("equal", "https://pokeapi.co/api/v2/move/812/")
    })

    it("validates the held items length", () => {
        const ZERO = 0

        cy.get("@wartortle")
            .its("body.held_items.length")
            .should("equal", ZERO)
    })
})
