import { Component, OnInit } from '@angular/core';
import { Message } from 'src/message.model';
import { MessagingDataService } from '../messaging-data.service';

@Component({
  selector: 'app-message-count-component',
  templateUrl: './message-count-component.component.html',
  styleUrls: ['./message-count-component.component.css'],
})
export class MessageCountComponentComponent implements OnInit {

  // initialize sentMessageCount as the variable that holds integer
  sentMessageCount = 0;

  /* injected MessagingDataService */
  constructor(private messagingSvce: MessagingDataService) {}

  areMultipleMessages(): boolean {
    return this.sentMessageCount >= 2;
  }

  ngOnInit(): void {
    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      // length of the Message array is stored as the number of messages
      this.sentMessageCount = messages.length;
    });
  }
}
