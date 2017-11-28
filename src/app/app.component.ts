import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'super-duper-chat-app';
  public user: User;

  public setUser(user: User): void {
    this.user = user;
  }
}
