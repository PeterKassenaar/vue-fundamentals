// TodoList_spec.js - test specifications for TodoList.vue
describe('Managing our todos', () => {
    // 1. Test - adding a todo
    it('Should add a todo when button is clicked', () => {
        // 1a. Visit the homepage - make sure the project is started!
        cy.visit('http://localhost:8080');

        // 1b. Find the textbox and type something in it
        cy.get('#new-todo').type('eat');

        // 1c. Find the button and click it.
        cy.get('button').click();

        // 1d. Make sure the textbox contains the text.
        cy.get('.todo').contains('eat')
    });

    // 2. Test - adding a CSS style if task is completed
    it('should cross the item out if clicked', () => {
        cy.get('.todo')
            .contains('eat')
            .click();

        cy.get('.todo')
            .contains('eat')
            .should('have.class', 'completed');
    });

    // 3. Test if the task is correctly deleted
    it('should delete the item if Del button is clicked', () => {
        // 3a. Click the delete button
        cy.get('.delete-todo').click();

        // 3b. Check if there are no more items remaining in the list of items
        cy.get('.list-group').find('li').should('have.length', 0)
    });
});
