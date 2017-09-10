import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: string = 'MaidlistPage';
  tab2Root: string = 'HomePage';
  tab3Root: string = 'AboutPage';
  tab4Root: string = 'ContactPage';

  constructor() {

  }
}
