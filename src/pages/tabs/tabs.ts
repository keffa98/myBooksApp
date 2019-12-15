import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BooksPage} from "../books/books";
import {SettingsPage} from "../settings/settings";
import {HomePage} from "../home/home";
import {CdsPage} from "../cds/cds";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  booksPage = BooksPage;
  settingsPage = SettingsPage;
  homePage = HomePage;
  cdPage = CdsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TabsPage');
  // }

}
