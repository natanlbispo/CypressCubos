/// <reference types="Cypress" />

describe ("Initial Teste", () =>{

    it("Visita o site", () => {
            cy.visit('https://dev-maxima-internetbanking.bbnk.cubos.io/login');
    });

    it("Login válido",() => {

        cy.visit('https://dev-maxima-internetbanking.bbnk.cubos.io/login');

        cy.get('.sc-gtXRHa > :nth-child(3) > .sc-iqzUVk')
        .type('04634517590')
        // cy.screenshot('teste');

        cy.get(':nth-child(5) > .sc-iqzUVk').type('170593');
        // cy.screenshot('login');

        cy.get('.sc-esOvli').click();


    });

    it("Login com campo em branco",() => {

        cy.visit('https://dev-maxima-internetbanking.bbnk.cubos.io/login');

        cy.get('.sc-gtXRHa > :nth-child(3) > .sc-iqzUVk')
        .type(' ')
        // cy.screenshot('teste');

        cy.get(':nth-child(5) > .sc-iqzUVk').type('170593');
        // cy.screenshot('login');

        cy.get('.sc-esOvli').click();


    });
    it("Login dados  inválido",() => {

        cy.visit('https://dev-maxima-internetbanking.bbnk.cubos.io/login');

        cy.get('.sc-gtXRHa > :nth-child(3) > .sc-iqzUVk')
        .type('0463432')
        // cy.screenshot('teste');

        cy.get(':nth-child(5) > .sc-iqzUVk').type('170593');
        // cy.screenshot('login');

        cy.get('.sc-esOvli').click();


    });

    it("Login incorreto",() => {


        cy.visit('https://dev-maxima-internetbanking.bbnk.cubos.io/login');
        cy.get('.sc-gtXRHa > :nth-child(3) > .sc-iqzUVk')
        .type('04634517591')
        // cy.screenshot('teste');

        cy.get(':nth-child(5) > .sc-iqzUVk').type('170593');
        cy.get('.sc-esOvli').click();
        cy.get('.sc-jVODtj').should('contain', 'CPF inválido');


    });
});
    
