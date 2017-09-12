import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Maid } from '../../models/Maid';

import { MaidService } from '../../providers/maid-service'
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public maidService: MaidService,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FillCadidateProfilePage');
  }

  submitProfile(maid: Maid) {
    this.maidService.submitProfile(maid).subscribe(
      response => {
        if(response) {
          this.createSuccess = true;
          this.showPopup("Success", "Account created.");
        } else {
          this.showPopup("Error", "Problem creating account.");
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
              //this.navParams.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

}
