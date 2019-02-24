import bookService from '../services/book-service.js';
import bookList from '../cmps/book-list-cmp.js';
// import carFilter from '../cmps/car-filter-cmp.js';

export default {
    template: `
        <section class="book-app">
            <h1>Book App</h1>
            <!--<car-filter @filtered="setFilter"></car-filter>-->
            <!--<car-list :cars="carsToShow"></car-list>-->

            <!--<book-filter v-on:filtered="setFilter"></book-filter>-->
            <book-list v-bind:books="booksToShow" v-on:selected="selectBook"></book-list>
            <!--<book-details v-bind:book="selectedBook"></book-details>-->
        </section> 
    `,
    data() {
        return {
            books: [],
            filter: null
            // filterBy: {
            //     vendor : ''
            // }
        }
    },
    created() {
        this.books = bookService.getBooks()
    },
    methods: {
        setFilter(filterBy) {
            //     console.log('CarApp Got Filter: ', filterBy);
            //     this.filterBy = filterBy;
        },
        selectBook(bookId) {
            console.log(bookId);

        }
    },
    computed: {
        booksToShow() {
            // if (!this.filter) return this.books;
            return this.books;
            //     return this.cars.filter(car => car.vendor.includes(this.filterBy.vendor))
        }
    },
    components: {
        bookList
        // bookFilter
    }
}