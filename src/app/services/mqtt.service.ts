import { Injectable } from '@angular/core';
import * as AWSMqtt from 'aws-mqtt';
import { config } from 'aws-sdk';
import * as AWS from 'aws-sdk';

@Injectable()
export class MqttService {

  public messages: string[] = [];
  private client;
  // constructor() { }

  public connect(name: string) {
    // set the default config object
    config.region = 'eu-west-2';
    config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'eu-west-2:9f6d021b-a5ab-433e-ab4e-bb03165cd5eb'
    });

    this.client = AWSMqtt.connect({
      WebSocket: (window as any).WebSocket,
      region: 'eu-west-2',
      credentials: config.credentials,
      endpoint: 'a2goqg6brfarl1.iot.eu-west-2.amazonaws.com',
      clientId: `mqtt-client-${name}`,
    });

    this.client.on('connect', () => {
      this.client.subscribe('/chat');
      this.messages.push('Successfully connected to AWS MQTT Broker!  :-)');
    });

    this.client.on('message', (topic, message) => {
      this.messages.push(`${topic} => ${message}`);
    });

    this.client.on('close', () => {
      this.messages.push('Closed  :-(');
    });

    this.client.on('offline', () => {
      this.messages.push('Went offline  :-(');
    });
  }
  //
  // publish(message: string) {
  //
  // }
}
