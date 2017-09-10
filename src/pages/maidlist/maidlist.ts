import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Maid } from '../../providers/maid';

/**
 * Generated class for the MaidlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-maidlist',
  templateUrl: 'maidlist.html',
})
export class MaidlistPage {

  maids: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public maid: Maid) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaidlistPage');
    this.getMaids();
  }

  getMaids() {
    this.maid.getMaids()
    .subscribe(
      maids => this.maids = maids,
      error =>  this.errorMessage = <any>error);
  }

}
