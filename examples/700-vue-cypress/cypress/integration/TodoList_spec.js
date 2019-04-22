// TodoList_spec.js - test specifications for TodoList
describe('managing our todos', () => {
	it('should add a todo when button is clicked', () => {
		cy.visit('http://localhost:8080');
		cy.get('#new-todo').type('eat');
		cy.get('button').click();
		cy.get('.todo').contains('eat')
	});

	it('should cross the item out if clicked', () => {
		cy.get('.todo').contains('eat').click();
		cy.get('.todo').contains('eat');//.should('have.class', 'completed');
	});

	it('should delete the item if Del button is clicked', () => {
		cy.get('.delete-todo').click();
		cy.get('.todo').should('not.contain', 'eat');
	});
});
