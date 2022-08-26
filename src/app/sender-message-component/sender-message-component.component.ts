import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/message.model';

@Component({
  selector: 'app-sender-message-component',
  templateUrl: './sender-message-component.component.html',
  styleUrls: ['./sender-message-component.component.css'],
})
export class SenderMessageComponentComponent implements OnInit {

  // message is the child component
  @Input() message: Message = {
    sender: { firstName: 'Ludovic' },
    text: 'Message from Ludovic',
    conversationId: 1,
    sequenceNumber: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  /*
  // ngStyle way to format the template
  // in actual template, ngClass is used
  getCurrentStyles() {
    let currentStyles = {
      'background-color': this.message.sender.isOnline ? 'blue' : 'red',
    };
    return currentStyles;
  }
  */

}
