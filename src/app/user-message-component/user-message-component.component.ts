import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/message.model';
import { LoggingService } from '../logging.service';
import { MessagingDataService } from '../messaging-data.service';

@Component({
  selector: 'app-user-message-component',
  templateUrl: './user-message-component.component.html',
  styleUrls: ['./user-message-component.component.css'],
})
export class UserMessageComponentComponent implements OnInit {

  /* Defining message input */
  @Input()
  message: Message = {
    sender: { firstName: 'Ludovic' },
    text: 'Message from Ludovic',
    conversationId: 1,
    sequenceNumber: 0,
  };

  /* UserMessageComponent have two dependency injections:
  LoggingService and MessagingDataService */
  constructor(
    private loggingSvce: LoggingService,
    private messagingSvce: MessagingDataService
  ) {}

  ngOnInit(): void {}

  /* deleteMessage() simply calls deleteUserMessage() method from MessageService object */
  deleteMessage() {
    this.messagingSvce.deleteUserMessage(this.message);
  }
}
