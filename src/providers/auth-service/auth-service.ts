import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http,Headers,RequestOptions } from '@angular/http';
import { Account } from '../../models/Account'

 
@Injectable()
export class AuthServiceProvider {

  private apiUrl = 'http://localhost:8100/mic/account/login';

  isAuthenticated: boolean = false;

  currentAccount: Account;

  constructor(public http: Http) {}

  
 
  public login(credentials) {
      console.log(credentials);
      return Observable.create(observer => {
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
          this.http.get(this.apiUrl + "?account=" + credentials.account + "&password=" + credentials.password, options).subscribe(data => {
          console.log(data);
          if(data.json().account) {
              this.currentAccount = data.json();
              let access = true;
              observer.next(access);
          } else {
             let access = false;
             observer.next(access);
          }
        });
      });
    
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
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
}