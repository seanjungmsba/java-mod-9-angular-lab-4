import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/user.model';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css'],
})
export class ContactComponentComponent implements OnInit {
  @Input() user = User;

  constructor() {}

  ngOnInit(): void {}
}
