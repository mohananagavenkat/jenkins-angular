/// <reference types="Cypress" />

describe('Servers Page', () => {
  it('Should add new server when we type servername and click on add button', () => {
    const serverName = 'server1';
    cy.visit('/servers');
    cy.get('app-add-server > input').type(serverName);
    cy.get('app-add-server > p > span').contains(serverName);
    cy.get('app-add-server > button').click();
    cy.get('app-server-list > ul > li').first().contains(serverName);
  });

})
