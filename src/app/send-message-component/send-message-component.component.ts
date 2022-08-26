import { Component, OnInit } from '@angular/core';
import { Message } from 'src/message.model';
import { User } from 'src/user.model';
import { LoggingService } from '../logging.service';
import { MessagingDataService } from '../messaging-data.service';

@Component({
  selector: 'app-send-message-component',
  templateUrl: './send-message-component.component.html',
  styleUrls: ['./send-message-component.component.css'],
})
export class SendMessageComponentComponent implements OnInit {

  // messageString is a two-way binded variable ( [(ngModel)]="messageString" )
  messageString: string;
  sequenceNumber = 1;

  // why do we inject MessagingDataService? => we need to add message using addUserMessage() method available in this service
  constructor(
    private loggingSvce: LoggingService,
    private messagingSvce: MessagingDataService) {}

  ngOnInit(): void {}

  // use the instance of the logging service in our event handler
  onSendMessage() {

    // set currentUser
    let currentUser: User = { firstName: 'Maria', isOnline: true };

    // display messageString
    this.loggingSvce.log(this.messageString);

    // contruct newMessage
    const newMessage: Message = new Message(
      currentUser,
      this.messageString,
      1,
      this.sequenceNumber
    );

    // increment sequenceNumber
    this.sequenceNumber++;

    // adding user message
    this.messagingSvce.addUserMessage(newMessage);

  }
}
