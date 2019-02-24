import bookService from '../services/book-service.js';
import bookList from '../cmps/book-list-cmp.js';
import bookDetails from '../cmps/book-details-cmp.js'
import bookFilter from '../cmps/book-filter-cmp.js';

export default {
    template: `
        <section class="book-app">
            <h1>Book App</h1>
            <!--<car-filter @filtered="setFilter"></car-filter>-->
            <!--<car-list :cars="carsToShow"></car-list>-->

            <book-filter v-on:filtered="setFilter"></book-filter>
            <book-list v-bind:books="booksToShow" v-on:selected="selectBook"></book-list>
            <book-details v-bind:book="selectedBook"></book-details>
        </section> 
    `,
    data() {
        return {
            books: [],
            selectedBook: null,
            // filter: null,
            filterBy: {
                title: '',
                fromPrice: 0,
                toPrice: Infinity
            }
        }
    },
    created() {
        this.books = bookService.getBooks();
    },
    methods: {
        setFilter(filterBy) {
            console.log('BoookApp Got Filter: ', filterBy);
            this.filterBy = filterBy;
        },
        selectBook(bookId) {
            this.selectedBook = bookService.getBookById(bookId);
            // console.log(this.selectedBook);

        },
    },
    computed: {
        booksToShow() {
            if (!this.filterBy.title &&
                this.filterBy.fromPrice === 0 &&
                this.filterBy.toPrice === Infinity) return this.books;
            return this.books.filter(book => {
                return book.title.includes(this.filterBy.title) &&
                    book.listPrice.amount > this.filterBy.fromPrice &&
                    book.listPrice.amount < this.filterBy.toPrice
            })
        },

    },
    components: {
        bookList,
        bookDetails,
        bookFilter
    }
}