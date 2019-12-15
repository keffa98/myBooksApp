import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {BooksModel} from "../../models/books.model";
import {BooksService} from "../../services/books.service";

/**
 * Generated class for the SingleBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-single-book',
  templateUrl: 'single-book.html',
})
export class SingleBookPage implements OnInit{
  index: number;
  book: BooksModel;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public booksService: BooksService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.booksService.bookList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleBook() {
    this.book.isLend = !this.book.isLend;
    console.log(this.book.isLend);
  }
}
