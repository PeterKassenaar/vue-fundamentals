// A sample first test for Cypress.
// Important here is that you see/recognize the structure,
// with describe(), it(), and expect() blocks

describe('My first test', () => {
    // First test, just a sample: this test will always pass
    it('Doesn\'t do much', () => {
        expect(true).to.equal(true);
    })

    // Second test, using additional options
    it('Should visit the sample Cypress kitchen sink', () => {
        // 1. Visit the web page we want to test
        cy.visit('https://example.cypress.io')

        // Pausing your tests and step through it manually to debug them
        //cy.pause()

        // 2. Find an element on the page and click it
        cy.contains('type').click()

        // 3. Assertion, using chaining
        cy.url().should('include', '/commands/actions')

        // 4. Other commands on the cy. object
        cy.get('.action-email') // based on css-classes
            .type('test@test.com') // type some text in this element
            .should('have.value', 'test@test.com') // see options for 'have'
    })
})
