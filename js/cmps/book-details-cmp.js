import longText from './long-text-cmp.js';
import modal from './modal-cmp.js';
import bookService from '../services/book-service.js';
import reviewAdd from '../cmps/review-add-cmp.js';

export default {
    // props: ['book'],
    template: `
        <modal v-if="book" v-show="isShowModal" v-on:close="onCloseModal">
            <h6 slot="header">{{book.title}}</h6>
            <h6 slot="body">{{pageCount}}</h6>
            <h6 slot="body">{{publishedDate}}</h6>
            <h6 slot="body" v-bind:class="classObject">{{bookPrice}}</h6>
            <h6 slot="body">{{onSale}}</h6>
            <long-text slot="body" v-bind:txt="book.description"></long-text>
            <review-add slot="body" v-on:reviewed="saveReview"></review-add>
        </modal>
    `,
    data() {
        return {
            isShowModal: false,
            book: null,
        }
    },
    methods: {
        // selectBook(book) {
        //     this.$emit('selected', book.id);
        // }
        onCloseModal() {
            // console.log('onCloseModal');
            this.isShowModal = false;
            this.$router.push('/books');
        },
        saveReview(review) {
            // console.log('saveReview');
            console.log(review);
            bookService.addReview(this.book.id, review)
                .then(() => {
                    console.log('Review was added');
                    this.onCloseModal();
                });
        }
    },
    computed: {
        pageCount() {
            if (this.book.pageCount > 500) return 'Long reading';
            if (this.book.pageCount > 200) return 'Decent Reading';
            if (this.book.pageCount < 100) return 'Light Reading';
            return 'Regular Reading';

        },
        publishedDate() {
            var date = new Date;
            var currYear = date.getFullYear();
            if (currYear - this.book.publishedDate > 10) return 'Veteran Book';
            if (currYear - this.book.publishedDate < 1) return 'New!';
            return 'Less than 10 years book';

        },
        bookPrice() {
            return `${this.book.listPrice.amount} ${this.book.listPrice.currencyCode}`;
        },
        onSale() {
            if (this.book.listPrice.isOnSale) return 'On sale!!!';
        },
        classObject() {
            return {
                'red-bg': this.book.listPrice.amount > 150,
                'green-bg': this.book.listPrice.amount < 20
            }
        }
    },
    created() {
        // console.log('book is', this.book);
        // console.log(this.$route.params);
        const bookId = this.$route.params.bookId;
        bookService.getBookById(bookId)
            .then(book => this.book = book);
    },
    updated() {
        // console.log('REFS:', this.$refs);
        if (this.$refs.fullName !== undefined) {
            this.$refs.fullName.focus();
        }
    },
    // NOT WORKING
    // mounted() {
    //     // console.log('REFS:', this.$refs);
    //     if (this.$refs.fullName !== undefined) {
    //         this.$refs.fullName.focus();
    //     }
    // },
    watch: {
        book: function () {
            this.isShowModal = true;
        }
    },

    components: {
        longText,
        modal,
        reviewAdd
    }
}