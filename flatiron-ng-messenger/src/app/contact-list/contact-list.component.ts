import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-contact-list-component',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  users: User[] = [
    { firstName: "Aurelie" },
    { firstName: "James" },
    { firstName: "Jessica" },
    { firstName: "Ludovic" },
    { firstName: "Maria" },
  ];

  constructor() {
    console.log("displaying all users");
    this.users.map((user: User) => console.log(user.firstName));
  }

  ngOnInit(): void {
  }

}
