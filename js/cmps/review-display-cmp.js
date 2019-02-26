export default {
    props: ['reviews'],
    template: `
        <div>
            <table v-for="(review,idx) in reviews">
                <tbody>
                    <tr>
                        <td>{{review.fullName}}</td>
                        <td>{{review.stars}}</td>
                        <td>{{review.readAt}}</td>
                        <td>{{review.freeText}}</td>
                        <td><button v-on:click="emitDeleteReview(idx)">x</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    data() {
        return {

        }
    },
    methods: {
        emitDeleteReview(reviewIdx) {
            this.$emit('delete', reviewIdx);
        },
    },
    computed: {
        display() {
            return this.reviews;
        }
    },
    mounted() {

    },
    created() {
        // console.log('reviews created');
        // console.log(this.reviews);

    }
}