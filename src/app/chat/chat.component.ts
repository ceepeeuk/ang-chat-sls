import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {// implements OnInit {

  // constructor() { }

  // ngOnInit() { }

  @Input() public user: User;
}
