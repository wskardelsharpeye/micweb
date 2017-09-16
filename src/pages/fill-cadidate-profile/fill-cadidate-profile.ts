import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Maid } from '../../models/Maid';
import { Account } from '../../models/Account';
import { MaidService } from '../../providers/maid-service';
import { JoblistPage } from '../joblist/joblist';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the FillCadidateProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-fill-cadidate-profile',
  templateUrl: 'fill-cadidate-profile.html',
})
export class FillCadidateProfilePage {

  createSuccess = false;
  maid = {} as Maid;
  currentAccount = {} as Account;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public maidService: MaidService,
    private alertCtrl: AlertController,
    private auth: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FillCadidateProfilePage');
  }

  submitProfile(maid: Maid) {
    maid.accountId = this.auth.getAccountInfo().id;
    this.maidService.submitProfile(maid).subscribe(
      response => {
        if(response) {
          this.createSuccess = true;
          this.showPopup("Success", "profile submit successfully.");
        } else {
          this.showPopup("Error", "Problem submitting profile.");
        }
      },
      error => {
        this.showPopup("Error", error);
      });
  }


  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.setRoot(JoblistPage);
            }
          }
        }
      ]
    });
    alert.present();
  }

}
