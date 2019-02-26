import googleBookService from '../services/google-book-service.js';
import bookService from '../services/book-service.js';

export default {
    // props: ['reviews'],
    template: `
    <section class="book-add flex">
        <div>
            Add Book: <input type="text" placeholder="Search for a book" v-on:keyup.enter="getBooks" v-model="searchTxt"/>
            <button v-on:click="getBooks">Search</button>
        </div>
        <!--<ul>
            <li v-for="book in booksToShow">{{book.volumeInfo.title}} <button v-on:click="onAddBook(book)">+</button></li>
        </ul>-->
        <table border="1" cellpadding="5" class="table table-bordered">
            <tbody>
                <tr v-for="book in booksToShow">
                    <td>{{book.volumeInfo.title}}</td>
                    <td><button v-on:click="onAddBook(book)">+</button></td>
                </tr>
            </tbody>
        </table>
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
                    console.log(books.items);
                    this.books = books.items;
                });
        },
        onAddBook(book) {
            console.log(book);
            bookService.addGoogleBook(book)
                .then((res) => {
                    console.log(res);
                    console.log('Google book was added');
                }).catch((res) => {
                    console.log(res);
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
        // googleBookService.getBooks()
        //     .then(books => this.books = books);

    },
    components: {
        googleBookService,
        bookService
    }
}