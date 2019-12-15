import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {CdsService} from "../../services/cds.service";
import {CdsModel} from "../../models/cds.model";

@Component({
  selector: 'page-single-cds',
  templateUrl: 'single-cds.html',
})
export class SingleCdsPage implements OnInit{

  index: number;
  cd: CdsModel;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public cdService: CdsService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.cdService.cdList[this.index];
  }
  dismissModal() {
    this.viewCtrl.dismiss();
  }
  onToggleCd() {
    this.cd.isLend = !this.cd.isLend;
    console.log(this.cd.isLend);
  }

}
