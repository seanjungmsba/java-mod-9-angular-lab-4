import { Component, OnInit } from '@angular/core';
import { Conversation } from 'src/conversation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversation-control-component',
  templateUrl: './conversation-control-component.component.html',
  styleUrls: ['./conversation-control-component.component.css'],
})
export class ConversationControlComponentComponent implements OnInit {
  conversations: Conversation[] = [
    {
      id: 1,
      users: [
        { firstName: 'Claire' },
        { firstName: 'Ludovic' },
        { firstName: 'Jessica' },
        { firstName: 'Sean' },
      ],
    },
    {
      id: 2,
      users: [{ firstName: 'Claire' },
              { firstName: 'James' },
              { firstName: 'John' }],
    },
    {
      id: 3,
      users: [
        { firstName: 'Claire' },
        { firstName: 'Aurelie' },
        { firstName: 'James' },
        { firstName: 'Jessica' },
      ],
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNewMessage() {
    this.router.navigate(['contactList']);
  }
}
