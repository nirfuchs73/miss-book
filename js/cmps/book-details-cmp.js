import longText from './long-text-cmp.js';
import modal from './modal-cmp.js';

export default {
    props: ['book'],
    template: `
        <modal v-if="book" v-show="isShowModal" @close="isShowModal = false">
            <h3 slot="header">{{book.title}}</h3>
            <h3 slot="body">{{pageCount}}</h3>
            <h3 slot="body">{{publishedDate}}</h3>
            <h3 slot="body" v-bind:class="{'red-bg': book.listPrice.amount > 150, 'green-bg': book.listPrice.amount < 20}">{{bookPrice}}</h3>
            <h3 slot="body">{{onSale}}</h3>
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