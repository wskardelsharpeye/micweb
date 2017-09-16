import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Http, Headers, RequestOptions , Response} from '@angular/http';
import { Account } from '../../models/Account';
import { AppConfig } from '../../app/app.config';

 
@Injectable()
export class AuthServiceProvider {

  private baseUrl = AppConfig.getDevUrl();

  private url_login = this.baseUrl + '/account/login';

  private url_register = this.baseUrl + '/account/save';

  currentAccount: Account;

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {}

  
 
  public login(credentials) {
      console.log(credentials);
      return Observable.create(observer => {
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
          this.http.get(this.url_login + "?account=" + credentials.account + "&password=" + credentials.password, options).subscribe(data => {
          this.currentAccount = data.json();
          //candidates
          //employers
          //assistant
          //newcomer
          if(this.currentAccount.account) {
              observer.next(this.currentAccount.role);
          } else {
             observer.next(null);
          }
        });
      });
    
  }
  register(account: Account): Observable<any> {
 //public register(account: Account): Observable<any>{
    return this.http
    .post(this.url_register, JSON.stringify(account),{headers: this.headers})
    .map(this.extractData)
    .do(this.logResponse)
    .catch(this.handleError);
  }
 
  public getAccountInfo() : Account {
    return this.currentAccount;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentAccount = null;
      observer.next(true);
      observer.complete();
    });
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

}