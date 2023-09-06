let bookList = JSON.parse(localStorage.getItem('bookList')) || [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook(title, author) {
    const newBook = new Book(title, author);
    bookList.unshift(newBook);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  static removeBook(book) {
    bookList = bookList.filter((b) => b !== book);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }
}

export { Book };/* eslint-disable-line */