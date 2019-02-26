import storageService from './storage-service.js';
const BOOKS_KEY = 'googleBooks';

export default {
    getBooks: getBooks
}

var gBooks;

// _createBooks();

function getBooks(searchTxt) {
    // return Promise.resolve(gBooks);
    var api = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${searchTxt}`;

    return axios.get(api).then(res => res.data);
}

function _createBooks() {
    gBooks = storageService.load(BOOKS_KEY);
    if (gBooks && gBooks.length) return;

    var books = [];

    storageService.store(BOOKS_KEY, books);
    gBooks = books;
}
