import { Injectable } from '@angular/core';
import ActionCable from 'actioncable';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

/*
  Generated class for the ActionCableProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActionCableService {
  cable: any;
  constructor(private http: HttpClient) {
    console.log('Hello ActionCableProvider Provider');
    this.cable = null;
    // let webSocket = ACTIONCABLE_NAME + authentication_token;
    // this.cable = ActionCable.createConsumer(webSocket);
    // console.log(this.cable);
  }

  establishConnection() {
    console.log('establishing connection...');
    const webSocket = `${environment.websocketApiUrl}`;
    this.cable = ActionCable.createConsumer(webSocket);
    console.log(this.cable);
  }

  destroyConnection() {
    this.cable = null;
  }

}




