import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'chinwag';
  public user: User;

  public setUser(user: User): void {
    this.user = user;
  }
}
