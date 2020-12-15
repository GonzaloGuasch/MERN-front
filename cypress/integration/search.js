describe('Input', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('.navbar-container > button').click();
    })
    it('Busco una pelicula por id y me devuelve su nombre', () => {
        cy.fixture('movie')
        .then(movie => {
            cy.intercept('GET', 'https://api.themoviedb.org/3/movie/**', movie)
            cy.get('input').type('280');
            cy.get('div > :nth-child(2)').click();

            cy.get(':nth-child(1) > div').should('contain', 'Terminator 2');
        })

    })
})