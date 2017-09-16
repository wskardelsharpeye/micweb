import { Component } from '@angular/core';
import { NavController, IonicPage, ToastController,Loading,LoadingController, ActionSheetController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Account } from '../../models/Account';
@IonicPage()
@Component({
  selector: 'page-rolechoose',
  templateUrl: 'rolechoose.html'
})
export class RolechoosePage {

  loading: Loading;
  cuurrentAccount: Account;

  constructor(private nav: NavController,
     private auth: AuthServiceProvider,
     private toast: ToastController,
     private loadingCtrl: LoadingController,
     private navCtrl: NavController,
     private actionSheetCtrl: ActionSheetController) {
  }

  ionViewWillLoad() {
    let cuurrentAccount = this.auth.getAccountInfo();
    console.log(cuurrentAccount);
    if (cuurrentAccount && cuurrentAccount.account) {
      this.toast.create({
        message: `Welcome to MaidInChina, your account is : ${cuurrentAccount.account}`,
        duration: 5000
      }).present();
    } else {
      this.toast.create({
        message: `Could not find authentication details.`,
        duration: 5000
      }).present();
    }
  }
 
  public logout() {
    this.showLoading();
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  public fillCadidateProfile() {
    this.navCtrl.push('FillCadidateProfilePage');
  }
  public fillEmployerProfile() {
    this.navCtrl.push('FillEmployerProfilePage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Are you sure to logout',
      buttons: [
        {
          text: 'Logout',
          role: 'destructive',
          handler: () => {
            this.logout();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
 
    actionSheet.present();
  }
  
}