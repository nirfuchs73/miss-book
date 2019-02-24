import bookPreview from './book-preview-cmp.js';

export default {
    props: ['books'],
    template: `
        <section>
            <!--<h1>Book List</h1>-->
            <div class="book-list flex">
                <book-preview v-for="(currBook, idx) in books" v-bind:book="currBook" :key="currBook.id" v-on:click.native="selectBook(currBook)">
                </book-preview>
            </div>
        </section>
    `,
    methods: {
        selectBook(book) {
            this.$emit('selected', book.id);
        }
    },

    components: {
        bookPreview
    }
}