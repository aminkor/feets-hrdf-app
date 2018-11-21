import {Injectable} from '@angular/core';
// import {SERVER_NAME} from './config';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {environment} from '../../environments/environment.prod';
import {UserForm} from '../_models/UserForm';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HrdfServerProviderService {
  // endPointRootURL = SERVER_NAME + '/api/v1';

  constructor(private http: HttpClient) {
    console.log('Hello HrdfServerProviderService Provider');
  }

  // private handleError(error: Response | any) {
  // }

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

  createVisitor(user: UserForm) {
    console.log('this is in server = ');
    console.log(user);
    return this.http.post(`${environment.apiUrl}/visitor/create/`, user);
  }


}

