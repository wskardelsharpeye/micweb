import { Injectable } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Maid } from '../models/Maid';
import { AppConfig } from '../app/app.config'

/*
  Generated class for the Rest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MaidService {

  private baseUrl = AppConfig.getDevUrl();

  private url_getMaids = this.baseUrl + '/maid/findAll';

  private url_create = this.baseUrl + '/maid/save'
  
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {}

  getMaids(): Observable<string[]> {
    return this.http.get(this.url_getMaids)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  //submit profile
  submitProfile(maid: Maid): Observable<any> {
    const url = `${this.url_create}`;
    return this.http
      .post(url, JSON.stringify(maid),{headers: this.headers})
      .map(this.extractData)
      .do(this.logResponse)
      //.toPromise()
      //.then(res => res.json().data as Maid)
      //.then(res => console.log(res))
      .catch(this.promiseHandleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private promiseHandleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
