import { bookList } from './bookData.js';

export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = bookList.length;
  }
}