import {Injectable} from '@angular/core';
import {SERVER_NAME} from './config';
import {Http, RequestOptions, Headers, Response} from '@angular/http';

@Injectable()
export class HrdfServerProviderService {
  endPointRootURL = SERVER_NAME + '/api/v1';

  constructor(public http: Http) {
    console.log('Hello HrdfServerProviderService Provider');
  }

  private handleError(error: Response | any) {
  }

  // userSurveyAnswers(learner: Learner) {
  // var serviceRoute = this.endPointRootURL + '/notifications/read';
  // let headers = new Headers({
  //   'Content-Type': 'application/json',
  //   'Accept': 'application/json',
  //   'X-Learner-Email': learner.email,
  //   'X-Learner-Token': learner.authentication_token
  // });
  // let options = new RequestOptions({headers: headers}); // Create a request option
  // var body = {
  //   "learner_id": learner.id
  // }
  // var response = this.http.post(serviceRoute, body, options).map(res => res.json());
  // return response;
// }

}

