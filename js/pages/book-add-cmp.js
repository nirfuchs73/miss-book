import googleBookService from '../services/google-book-service.js';
import bookService from '../services/book-service.js';
import userMsg from '../cmps/user-msg-cmp.js';
import { eventBus, SHOW_MSG } from '../event-bus.js';

export default {
    // props: ['reviews'],
    template: `
    <section class="book-add flex">
        <div>
            Add Book: <input type="text" placeholder="Search for a book" v-on:keyup.enter="getBooks" v-model="searchTxt"/>
            <button v-on:click="getBooks">Search</button>
        </div>
        <table border="1" cellpadding="5" class="table table-bordered">
            <tbody>
                <tr v-for="book in booksToShow">
                    <td>{{book.volumeInfo.title}}</td>
                    <td><button v-on:click="onAddBook(book)">+</button></td>
                </tr>
            </tbody>
        </table>
        <user-msg></user-msg>
    </section>
    `,
    data() {
        return {
            books: [],
            searchTxt: ''
        }
    },
    methods: {
        getBooks() {
            googleBookService.getBooks(this.searchTxt)
                .then(books => {
                    // console.log(books.items);
                    this.books = books.items;
                });
        },
        onAddBook(book) {
            // console.log(book);
            bookService.addGoogleBook(book)
                .then((res) => {
                    // console.log(res);
                    // console.log('Google book was added');
                    var message = { msg: 'Success! Book ' + res.title + 'book was added', type: 'success' };
                    eventBus.$emit(SHOW_MSG, { ...message });
                }).catch((res) => {
                    var message = { msg: 'Error! ' + res, type: 'error' };
                    eventBus.$emit(SHOW_MSG, { ...message });
                    // console.log(res);
                });
        }
    },
    computed: {
        booksToShow() {
            if (!this.title) return this.books;
            return this.books.filter(book => book.volumeInfo.title.includes(this.title));
        }
    },
    mounted() {

    },
    created() {

    },
    components: {
        googleBookService,
        bookService,
        userMsg
    }
}