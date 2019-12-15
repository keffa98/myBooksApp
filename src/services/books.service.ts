import {BooksModel} from '../models/books.model';

export class BooksService {
  bookList: BooksModel[] = [
    {
      title: 'From Zero to One',
      author: '',
      description: [
        'Lorepsum'
      ],
      isLend: false
    },
    {
      title: 'Tools of Titans',
      author: '',
      description: [
        'Lorepsum'
      ],
      isLend: true
    }
  ];
}
