import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { MqttService } from '../services/mqtt.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() public user: User;
  public message: string = '';

  constructor(public mqttService: MqttService) { }

  public ngOnInit() {
    this.mqttService.connect(this.user.name);
  }

  public onSubmit() {
    this.mqttService.publish(this.user.name, this.message);
    this.message = '';
  }
}
