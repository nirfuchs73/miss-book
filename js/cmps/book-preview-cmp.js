export default {
    props: ['book'],
    template: `
        <div class="book-card">
            <h6>{{book.title}}</h6>
            <h6>{{bookPrice}}</h6>
            <!--<img v-bind:src="imgUrl" />-->
        </div>
    `,
    methods: {
    },
    computed: {
        bookPrice() {
            return `${this.book.listPrice.amount} ${this.book.listPrice.currencyCode}`;
        },
        imgUrl() {
            return this.book.thumbnail;
        }
    }
}