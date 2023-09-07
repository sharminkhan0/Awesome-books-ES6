import { Book } from './books.js';

export const container = document.querySelector('.container');
const bookList = JSON.parse(localStorage.getItem('bookList')) || [];

export const displayBooks = (container) => {
  container.innerHTML = '';
  bookList.forEach((book) => {
    const newBook = document.createElement('div');
    newBook.classList.add('newBook');
    newBook.innerHTML = `<div class="bookPart"><p>${book.title} <span>by</span> ${book.author} </p>
      </div><button class="remove">Remove</button>`;
    container.appendChild(newBook);

    const removeBtn = newBook.querySelector('.remove');
    removeBtn.addEventListener('click', () => {
      Book.removeBook(book);
      newBook.remove();
    });
  });
};