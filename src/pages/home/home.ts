import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dir:string;
  constructor(private navCtrl: NavController, private platform:Platform) {
    this.dir = 'RTL';
  }

  changeDir(){
    this.dir = this.dir == 'RTL' ? 'LTR' : 'RTL';
    this.platform.setDir(this.dir,true);
  }

}
