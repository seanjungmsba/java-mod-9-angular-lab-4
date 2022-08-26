import { Component, OnInit } from '@angular/core';
import { User } from 'src/user.model';

@Component({
  selector: 'app-contact-list-component',
  templateUrl: './contact-list-component.component.html',
  styleUrls: ['./contact-list-component.component.css'],
})
export class ContactListComponentComponent implements OnInit {
  users: User[] = [
    { firstName: 'Aurelie' },
    { firstName: 'James' },
    { firstName: 'Jessica' },
    { firstName: 'Ludovic' },
    { firstName: 'Maria' },
    { firstName: 'Sean' },
    { firstName: 'John' },
  ];

  constructor() {
    console.log('displaying all users');
    this.users.map((user: User) => user.firstName);
    console.log(this.users);
  }

  ngOnInit(): void {}
}
