import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ActionSheetController   } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { JobService } from '../../providers/job-service';
import { Job } from '../../models/Job';
/**
 * Generated class for the JoblistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-joblist',
  templateUrl: 'joblist.html',
})
export class JoblistPage {

  jobs: Job[];
  errorMessage: string;
  loading: Loading;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private jobService: JobService,
              private auth: AuthServiceProvider,
              private loadingCtrl: LoadingController,
              private actionSheetCtrl: ActionSheetController
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoblistPage');
    this.findAll();
  }

  findAll() {
    this.jobService.findAll()
    .subscribe(
      jobs => this.jobs = jobs,
      error =>  this.errorMessage = <any>error);
  }

  public logout() {
    this.showLoading();
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }

  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
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
