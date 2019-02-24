// import bookPreview from './book-preview-cmp.js';

export default {
    props: ['book'],
    template: `
        <section v-if="book" class="book-details" v-bind:class="{'red-bg': book.listPrice.amount > 150, 'green-bg': book.listPrice.amount < 20}">
            <li v-for="(value, key) in book">
                {{ key }}:{{ value }}
            </li>
            <h3>{{pageCount}}</h3>
            <h3>{{publishedDate}}</h3>
            <h3>{{onSale}}</h3>
        </section>
    `,
    data() {
        return {
            // bookPrice : this.book.listPrice.amount
            // isExpensive: true
        }
    },
    methods: {
        // selectBook(book) {
        //     this.$emit('selected', book.id);
        // }
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
        onSale() {
            if (this.book.listPrice.isOnSale) return 'On sale!!!';
        }
    },
    created() {
        console.log('book is', this.book)
    },

    components: {
        // bookPreview
    }
}