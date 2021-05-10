import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit server URL', () => {
  cy.visit('/servers');
});

Given('I type server name {string}', (serverName) => {
  cy.get('app-add-server > input').type(serverName);
})

Given('I click on add server button', () => {
  cy.get('app-add-server > button').click();
})

Then('server with name {string} should be added to list', (serverName) => {
  cy.get('app-server-list > ul > li').first().contains(serverName);
});

