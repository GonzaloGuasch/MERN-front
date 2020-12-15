/// <reference types="Cypress" />
describe('prueba', () => {  
    it('la url cambia entre navegacion', () => {
        cy.visit('/');

        cy.url().should('contain', '/');
        cy.get('.navbar-container > button').click()
        cy.url().should('contain', '/addPeli');
    })  
})

