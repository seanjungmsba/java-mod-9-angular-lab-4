import { Component, OnInit } from '@angular/core';
import { Message } from 'src/message.model';
import { MessagingDataService } from '../messaging-data.service';

@Component({
  selector: 'app-conversation-thread-component',
  templateUrl: './conversation-thread-component.component.html',
  styleUrls: ['./conversation-thread-component.component.css'],
})
export class ConversationThreadComponentComponent implements OnInit {

  // initialize both senderMessages and userMessages as the empty Message array
  senderMessages: Message[];
  userMessages: Message[];

  /* inject MessagingDataService */
  constructor(private messagingSvce: MessagingDataService) {}

  ngOnInit(): void {
    this.senderMessages = this.messagingSvce.getSenderMessages();
    this.userMessages = this.messagingSvce.getUserMessages();
    // userMessagesChanged is an event emitter
    // everytime there is a new value in 'userMessagesChanged', callback function is called
    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      console.log('********** messages have changed');
      this.userMessages = messages; // store results into `userMessages` variable
    });
  }
}
