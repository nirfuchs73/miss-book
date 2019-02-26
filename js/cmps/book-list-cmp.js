import bookPreview from './book-preview-cmp.js';

export default {
    props: ['books'],
    template: `
        <section>
            <!--<h1>Book List</h1>-->
            <div class="book-list flex">
                <router-link v-for="(currBook, idx) in books" :key="currBook.id" :to="'/books/' + currBook.id">
                    <book-preview v-bind:book="currBook">
                    </book-preview>
                </router-link>
            </div>
            
            <!--<div class="book-list flex">
                <book-preview v-for="(currBook, idx) in books" v-bind:book="currBook" :key="currBook.id" v-on:click.native="selectBook(currBook)">
                </book-preview>
            </div>-->
        </section>
    `,
    methods: {
        // selectBook(book) {
        //     console.log(book);
        //     console.log(book.id);
        //     this.$emit('selected', book.id);
        // }
    },

    components: {
        bookPreview
    }
}