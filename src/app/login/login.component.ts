import { Component, EventEmitter, Output } from '@angular/core';

import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  @Output() public setUser: EventEmitter<User> = new EventEmitter<User>();

  public name: string = '';

  public onSubmit(f: NgForm) {
    this.setUser.emit(new User(f.value.name));
  }
}
