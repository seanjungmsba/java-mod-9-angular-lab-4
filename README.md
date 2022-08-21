# Lab 4

## Instructions

Create the functionality to delete a message from the user's history by adding a
delete button next to each message in the user message component.

Hints:

1. This will require a new endpoint to remove a specific message from the
   `userMessages` collection in your backend
2. You will need to update the `user-message-component.component.ts` controller
   and the `user-message-component.component.html` view in order to add the
   "cancel" button
3. Take advantage of the "cancel" functionality in your cypress test to "cancel"
   the message after you've validated that it was sent successfully.

> Note: without this enhancement, the cypress test we wrote is only meaningful
> the first time around, since every time after that, it will continue to find
> the `testMessage` in the conversation thread, since that message would have
> been there from the previous run of the test anyway.
