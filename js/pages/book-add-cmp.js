import googleBookService from '../services/google-book-service.js';

export default {
    // props: ['reviews'],
    template: `
    <section class="book-add flex">
        <div>
            Add Book: <input type="text" placeholder="Search for a book" v-model="title"/>
        </div>
        <!--{{booksToShow}}-->
        <ul>
            <li v-for="book in booksToShow">{{book.volumeInfo.title}} <button v-on:click="onAddBook(book.id)">+</button></li>
        </ul>
        <!--{{books[0].volumeInfo.title}}-->
    </section>
    `,
    data() {
        return {
            books: [],
            title: ''
        }
    },
    methods: {
        onAddBook(book) {
            console.log(book);
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
        googleBookService.getBooks()
            .then(books => this.books = books);

    },
    components: {
        googleBookService
    }
}