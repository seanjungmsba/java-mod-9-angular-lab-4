import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-send-message-component',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  messageString: string;

  // declare the loggingSvce variable through the component's constructor
  constructor(private loggingSvce: LoggingService) {}

  // use the instance of the logging service in our event handler
  onSendMessage() {
    this.loggingSvce.log("Send following message: ");
    this.loggingSvce.log(this.messageString);
  }

  ngOnInit(): void {
  }

}
