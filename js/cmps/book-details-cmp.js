import longText from './long-text-cmp.js';

export default {
    props: ['book'],
    template: `
       <!--<section v-if="book" class="book-details" v-bind:class="{'red-bg': book.listPrice.amount > 150, 'green-bg': book.listPrice.amount < 20}">-->
        <div v-if="book" class="book-details modal" tabindex="-1" role="dialog" v-bind:class="{show : isShowModal}">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{book.title}}</h5>
                        <button v-on:click="onCloseModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!--<li v-for="(value, key) in book">
                            {{ key }}:{{ value }}
                        </li>-->
                        <h3>{{pageCount}}</h3>
                        <h3>{{publishedDate}}</h3>
                        <h3 v-bind:class="{'red-bg': book.listPrice.amount > 150, 'green-bg': book.listPrice.amount < 20}">{{bookPrice}}</h3>
                        <h3>{{onSale}}</h3>
                        <long-text v-bind:txt="book.description"></long-text>
                    </div>
                    <div class="modal-footer">
                        <button v-on:click="onCloseModal" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!--</section>-->
    `,
    data() {
        return {
            // bookPrice : this.book.listPrice.amount,
            // isExpensive: true
            isShowModal: true
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
        longText
    }
}