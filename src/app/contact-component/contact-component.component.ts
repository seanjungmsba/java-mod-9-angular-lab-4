import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/user.model';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css'],
})
export class ContactComponentComponent implements OnInit {

  /*
    @Input() and @Output() give a child component a way to communicate with its parent component.
      @Input() lets a parent component update data in the child component.
      Conversely, @Output() lets the child send data to a parent component.
    The @Input() decorator in a child component or directive signifies that
    the property can receive its value from its parent component.
  */
  @Input()
  user = User;

  constructor() {}

  ngOnInit(): void {}
}
