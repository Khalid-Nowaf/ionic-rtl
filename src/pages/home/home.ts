import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { Keyboard } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dir:string;
  constructor(private navCtrl: NavController, private platform:Platform) {
    this.dir = this.platform.dir().toLowerCase();
  }

  changeDir(){
    this.dir = this.dir == 'rtl' ? 'ltr' : 'rtl';
    this.platform.setDir(this.dir,true);
  }


}
