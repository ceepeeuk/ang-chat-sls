import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected title = 'super-duper-chat-app';
  protected user: User;

  public setUser(user: User): void {
    this.user = user;
  }
}
