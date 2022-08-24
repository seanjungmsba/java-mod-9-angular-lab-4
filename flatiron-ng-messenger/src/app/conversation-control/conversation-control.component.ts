import { Component, OnInit } from '@angular/core';
import { Conversation } from '../conversation.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-conversation-control-component',
  templateUrl: './conversation-control.component.html',
  styleUrls: ['./conversation-control.component.css']
})
export class ConversationControlComponent implements OnInit {

  conversations: Conversation[] = [
    {
      id: 1,
      users: [
        { firstName: "Claire" },
        { firstName: "Ludovic" },
        { firstName: "Jessica" },
      ],
    },
    {
      id: 2,
      users: [{ firstName: "Claire" }, { firstName: "James" }],
    },
    {
      id: 3,
      users: [
        { firstName: "Claire" },
        { firstName: "Aurelie" },
        { firstName: "James" },
        { firstName: "Jessica" },
      ],
    },
  ];

  onNewMessage() {
    this.router.navigate(['contactList']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
