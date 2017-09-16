import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UserRole } from '../../utils/UserRole';
import { JoblistPage } from '../joblist/joblist';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { account: '', password: '' };

  constructor(private nav: NavController, 
              private auth: AuthServiceProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) { }

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(userRole => {
        //candidates
        //employers
        //assistant
        //newcomer
      if (null == userRole ) {
        this.showError("account or password incorrect");
      } else if (userRole == UserRole.getUserRole(UserRole.Role.CANDIDATE)) {
        this.nav.setRoot('JoblistPage');
      } else if (userRole == UserRole.getUserRole(UserRole.Role.EMPLOYER)) {
        this.nav.setRoot('xxx');
      } else if (userRole == UserRole.getUserRole(UserRole.Role.ASSISTANT)) {
        this.nav.setRoot('xxx');
      } else {
        this.nav.setRoot('RolechoosePage');
      } 
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Login Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
