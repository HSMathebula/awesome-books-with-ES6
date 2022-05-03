import Book from './modules/book.js';
import * as BookData from './modules/bookData.js';
import {
  bookTitle, bookAuthor, addBtn, addLink,
  contactLink, bookListLink, ctaList, ctaAdd, ctaContact,
} from './modules/declaration.js';

import * as luxon from './modules/luxon.js';

addBtn.addEventListener('click', () => {
  if (bookTitle.value.trim() !== '' && bookAuthor.value.trim() !== '') {
    const myBookItem = new Book(bookTitle.value, bookAuthor.value);
    BookData.bookList.push(myBookItem);
    localStorage.setItem('book', JSON.stringify(BookData.bookList));
    BookData.clearData();
    BookData.displayBook();
    bookListLink.style.display = 'block';
    addLink.style.display = 'none';
    contactLink.style.display = 'none';
  }
});

window.addEventListener('load', () => {
  BookData.displayBook();
  bookListLink.style.display = 'block';
  addLink.style.display = 'none';
  contactLink.style.display = 'none';
});

ctaList.addEventListener('load', () => {
  bookListLink.style.display = 'block';
  addLink.style.display = 'none';
  contactLink.style.display = 'none';
});

ctaAdd.addEventListener('load', () => {
  bookListLink.style.display = 'none';
  addLink.style.display = 'block';
  contactLink.style.display = 'none';
});

ctaContact.addEventListener('load', () => {
  bookListLink.style.display = 'none';
  addLink.style.display = 'none';
  contactLink.style.display = 'block';
});

const displayTime = () => {
  document.querySelector('#current-date').innerHTML = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_SHORT_WITH_SECONDS);
  setTimeout(displayTime, 1000);
};
displayTime();