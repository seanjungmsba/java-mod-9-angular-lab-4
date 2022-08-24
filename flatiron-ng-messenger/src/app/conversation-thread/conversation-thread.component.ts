import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessagingDataService } from '../messaging-data.service';

@Component({
  selector: 'app-conversation-thread-component',
  templateUrl: './conversation-thread.component.html',
  styleUrls: ['./conversation-thread.component.css']
})
export class ConversationThreadComponent implements OnInit {

  // We declare senderMessages and userMessages as we did before,
  // but we no longer assign them values here
  senderMessages: Message[];
  userMessages: Message[];

  // We ask Angular to inject the MessagingDataService by declaring it in our constructor
  // The MessagingDataService is available to be injected here
  // because we declared it as a provider in our module class.
  constructor(private messagingSvce: MessagingDataService) {}

  ngOnInit(): void {
    // We use the messagingSvce service to get the value for both message arrays
    this.senderMessages = this.messagingSvce.getSenderMessages();
    this.userMessages = this.messagingSvce.getUserMessages();
    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      console.log("********** messages have changed");
      this.userMessages = messages;
    });
  }

}
