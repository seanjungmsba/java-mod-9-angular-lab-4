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
  messageString: string;
  sequenceNumber = 1;

  constructor(
    private loggingSvce: LoggingService,
    private messagingSvce: MessagingDataService
  ) {}

  ngOnInit(): void {}

  // use the instance of the logging service in our event handler
  onSendMessage() {
    let currentUser: User = { firstName: 'Maria', isOnline: true };

    this.loggingSvce.log(this.messageString);
    const newMessage: Message = new Message(
      currentUser,
      this.messageString,
      1,
      this.sequenceNumber
    );
    this.sequenceNumber++;
    this.messagingSvce.addUserMessage(newMessage);
  }
}
