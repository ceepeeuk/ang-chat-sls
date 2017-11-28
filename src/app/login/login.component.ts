import { Component, EventEmitter, /*OnInit,*/ Output } from '@angular/core';

import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {// implements OnInit {

  @Output() public setUser: EventEmitter<User> = new EventEmitter<User>();

  public name: string = '';

  // constructor() { }

  // public ngOnInit() { }

  public onSubmit(f: NgForm) {
    this.setUser.emit(new User(f.value.name));
  }
}
