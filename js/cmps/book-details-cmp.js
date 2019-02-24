// import bookPreview from './book-preview-cmp.js';

export default {
    props: ['book'],
    template: `
        <section v-if="book" class="book-details">       
            <!--<h1>Book details</h1>-->
            <!--<h1>THIS IS TITLE {{book.title}}</h1>-->
            <li v-for="(value, key) in book">
                {{ key }}:{{ value }}
            </li>
            <h3>{{pageCount}}</h3>
            <h3>{{publishedDate}}</h3>
            
            <!--<div v-for="(value, key) in book">
                {{ key }}: {{ value }}
            </div>-->
        </section>
    `,
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

        },
        publishedDate() {
            var date = new Date;
            var currYear = date.getFullYear();
            if (currYear - this.book.publishedDate > 10) return 'Veteran Book';
            if (currYear - this.book.publishedDate < 1) return 'New!';
            return 'Less than 10 years book';

        },
        showTitle() {
            return this.book.title;
        },
        showAuthors() {
            return this.book.authors.join('-');
        },
        price() {

        }
    },
    created() {
        console.log('book is', this.book)
    },

    components: {
        // bookPreview
    }
}