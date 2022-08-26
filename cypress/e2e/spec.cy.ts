describe('empty spec', () => {

  const appURL = 'http://localhost:4200/';
  const testMessage = 'cypress test message';

  it('passes', () => {

    cy.visit(appURL);

    cy.contains('New Message').click();
    cy.url().should('include', 'contactList');

    cy.contains('Start Message').click();
    cy.url().should('equal', appURL);

    // get the input box by it 'name' attribute and type in it
    cy.get('input[name=user-message-input]').type(testMessage);

    // "Send" the message
    cy.contains('Send').click();

    // check that the message was sent
    cy.get('app-conversation-thread-component').should('contain', testMessage);

  });
  
});
