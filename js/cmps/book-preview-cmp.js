export default {
    props: ['book'],
    template: `
        <div class="book-card">
            <h3>{{book.title}}</h3>
            <h3>{{bookPrice}}</h3>
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
            // return `img/cars/${this.idx}.png`
            return this.book.thumbnail;
        }
    }
}