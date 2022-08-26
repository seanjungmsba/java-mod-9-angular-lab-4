import { Component, OnInit } from '@angular/core';
import { Conversation } from 'src/conversation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversation-control-component',
  templateUrl: './conversation-control-component.component.html',
  styleUrls: ['./conversation-control-component.component.css'],
})
export class ConversationControlComponentComponent implements OnInit {

  // defining list of Conversation objects
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

  /* injecting Router dependency */
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // navigate to localhost:4200/contactList when onNewMessage() from the template is clicked
  onNewMessage() {
    this.router.navigate(['contactList']);
  }
}
