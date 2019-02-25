import longText from './long-text-cmp.js';
import modal from './modal-cmp.js';

export default {
    props: ['book'],
    template: `
        <modal v-if="book" v-show="isShowModal" @close="isShowModal = false">
            <h4 slot="header">{{book.title}}</h4>
            <h4 slot="body">{{pageCount}}</h4>
            <h4 slot="body">{{publishedDate}}</h4>
            <h4 slot="body" v-bind:class="classObject">{{bookPrice}}</h4>
            <h4 slot="body">{{onSale}}</h4>
            <long-text slot="body" v-bind:txt="book.description"></long-text>
        </modal>
    `,
    data() {
        return {
            isShowModal: false
        }
    },
    methods: {
        // selectBook(book) {
        //     this.$emit('selected', book.id);
        // }
        onCloseModal() {
            this.isShowModal = false;
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
        console.log('book is', this.book);
    },
    watch: {
        book: function () {
            this.isShowModal = true;
        }
    },

    components: {
        longText,
        modal
    }
}