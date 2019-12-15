import { Component } from '@angular/core';
import {MenuController, ModalController, NavController, NavParams} from 'ionic-angular';
import {BooksModel} from "../../models/books.model";
import {BooksService} from "../../services/books.service";
import {SingleBookPage} from "../single-book/single-book";

@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  book: BooksModel[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private bookService: BooksService,
              private modalCtrl: ModalController,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.book = this.bookService.bookList.slice();
  }

  onLoadBook (index : number) {
    // book: {  title: string ,description: string[] , isLend: boolean}
    // this.navCtrl.push(SingleBookPage, {book: book});
    let modal = this.modalCtrl.create(SingleBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
