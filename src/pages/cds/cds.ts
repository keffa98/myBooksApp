import { Component } from '@angular/core';
import {MenuController, ModalController, NavController, NavParams} from 'ionic-angular';
import {CdsService} from "../../services/cds.service";
import {CdsModel} from "../../models/cds.model";
import {SingleCdsPage} from "../single-cds/single-cds";

/**
 * Generated class for the CdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cds',
  templateUrl: 'cds.html',
})
export class CdsPage {

  cd: CdsModel[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private CdService: CdsService,
              private modalCtrl: ModalController,
              private menuCtrl: MenuController ) {
  }
  ionViewWillEnter() {
    this.cd = this.CdService.cdList.slice();
  }

  onLoadCd (index : number) {
    let modal = this.modalCtrl.create(SingleCdsPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }



}
