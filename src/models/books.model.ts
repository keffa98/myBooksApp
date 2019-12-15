export class BooksModel {
  title: string;
  author: string;
  description: string[];
  isLend: boolean;

  constructor(title: string) {
    this.isLend = false;
  }
}
