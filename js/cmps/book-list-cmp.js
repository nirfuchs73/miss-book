import bookPreview from './book-preview-cmp.js';

export default {
    props: ['books'],
    template: `
        <section>

            <!--<li :key="currCar.id" v-for="(currCar, idx) in cars">
                <router-link :to="'/car/' + currCar.id">
                    <car-preview :car="currCar" :idx="idx+1">
                    </car-preview>
                </router-link>
                <button @click="emitDeleted(currCar.id)">x</button>
            </li>-->
            <!--<h1>Book List</h1>-->

            <div v-for="(currBook, idx) in books" :key="currBook.id">
                <router-link class="book-list flex" :to="'/books/' + currBook.id">
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
        selectBook(book) {
            console.log(book);
            console.log(book.id);
            this.$emit('selected', book.id);
        }
    },

    components: {
        bookPreview
    }
}