import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-sender-message-component',
  templateUrl: './sender-message.component.html',
  styleUrls: ['./sender-message.component.css']
})

export class SenderMessageComponent implements OnInit {

  @Input() message: Message = {
    sender: { firstName: "Ludovic" },
    text: "Message from Ludovic",
    conversationId: 1,
    sequenceNumber: 0,
  };

  getCurrentStyles() {
    let currentStyles = {
      'background-color': this.message.sender.isOnline ? 'blue' : 'red',
    };
    return currentStyles;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
