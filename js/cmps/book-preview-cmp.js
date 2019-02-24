export default {
    props: ['book'],
    template: `
        <div class="book-card">
            <h6>{{book.title}}</h6>
            <h5>{{bookPrice}}</h5>
            <img v-bind:src="imgUrl" />
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