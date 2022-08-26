import { Message } from "src/message.model";

describe('User Message Component', () => {
  it('navigates to server of Delete button click', () => {

    let mockMessage: Message = {
      sender: { firstName: 'Sean', isOnline: false },
      text: 'Message from Sean',
      conversationId: 1,
      sequenceNumber: 2,
    };

    cy.visit('http://localhost:4200');

    cy.intercept(
      {
        method: 'DELETE',
        url: 'http://localhost:8080/api/conversations/*/*',
      },
      (req) => {
        req.reply([mockMessage]);
      }
    );
    cy.contains('Delete').click();
    cy.contains(mockMessage.text);
  });
});
