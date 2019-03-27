/// <reference types="Cypress" />

describe ("Initial Teste", () =>{

    it("Visita o site", () => {
            cy.visit('http://endenreço');
    });

    it("Login válido",() => {

        cy.visit('http://endenreço');

        cy.get('.sc-gtXRHa > :nth-child(3) > .sc-iqzUVk')
        .type('cpf')
        // cy.screenshot('teste');

        cy.get(':nth-child(5) > .sc-iqzUVk').type('170593');
        // cy.screenshot('login');

        cy.get('.sc-esOvli').click();


    });

    it("Login com campo em branco",() => {

        cy.visit('http://endenreço');

        cy.get('.sc-gtXRHa > :nth-child(3) > .sc-iqzUVk')
        .type(' ')
        // cy.screenshot('teste');

        cy.get(':nth-child(5) > .sc-iqzUVk').type('170593');
        // cy.screenshot('login');

        cy.get('.sc-esOvli').click();


    });
    it("Login dados  inválido",() => {

        cy.visit('http://endenreço');

        cy.get('.sc-gtXRHa > :nth-child(3) > .sc-iqzUVk')
        .type('0463432')
        // cy.screenshot('teste');

        cy.get(':nth-child(5) > .sc-iqzUVk').type('');
        // cy.screenshot('login');

        cy.get('.sc-esOvli').click();


    });

    it("Login incorreto",() => {


        cy.visit('...');
        cy.get('.sc-gtXRHa > :nth-child(3) > .sc-iqzUVk')
        .type('cpf')
        // cy.screenshot('teste');

        cy.get(':nth-child(5) > .sc-iqzUVk').type('senha');
        cy.get('.sc-esOvli').click();
        cy.get('.sc-jVODtj').should('contain', 'CPF inválido');


    });
});
    
