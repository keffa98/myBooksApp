import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {BooksPage} from "../books/books";
import {SettingsPage} from "../settings/settings";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController){}

  booksPage = BooksPage;
  settingsPage = SettingsPage;
  onGoToBooks() {
    this.navCtrl.push(BooksPage);
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
}
