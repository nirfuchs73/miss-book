export default {
    props: ['book'],
    template: `
         <li>
            <h3>{{book.title}}</h3>
            <img v-bind:src="imgUrl" />
        </li>
    `,
    methods: {
    },
    computed: {
        imgUrl() {
            // return `img/cars/${this.idx}.png`
            return this.book.thumbnail;
        }
    }
}