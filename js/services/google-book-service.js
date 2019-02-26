import storageService from './storage-service.js';
const BOOKS_KEY = 'googleBooks';

export default {
    getBooks: getBooks
}

var gBooks;

_createBooks();

function getBooks() {
    return Promise.resolve(gBooks);
}

function _createBooks() {
    gBooks = storageService.load(BOOKS_KEY);
    if (gBooks && gBooks.length) return;

    var books = [];

    storageService.store(BOOKS_KEY, books);
    gBooks = books;
}