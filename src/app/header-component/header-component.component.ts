import { Component, OnInit } from '@angular/core';
import { User } from 'src/user.model';
import { MessagingDataService } from '../messaging-data.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent implements OnInit {

  /* setting activeUser as the header of the page, displaying 'Hello, {{activeUser.firstName}}' */
  activeUser: User = {
    firstName: 'Sean',
    isOnline: true,
  };

  constructor() {}

  ngOnInit(): void {
  }
}
