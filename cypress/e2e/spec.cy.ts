describe('empty spec', () => {
  const appURL = 'http://localhost:4200/';
  const testMessage = 'cypress test message'; //

  it('passes', () => {
    cy.visit(appURL);

    cy.contains('New Message').click();
    cy.url().should('include', 'contactList');

    cy.contains('Start Message').click();
    cy.url().should('equal', appURL);

    cy.get('input[name=user-message-input]').type(testMessage); // get the input box by it 'name' attribute and type in it
    cy.contains('Send').click(); // "Send" the message
    cy.get('app-conversation-thread-component').should('contain', testMessage); // check that the message was sent
  });
});
