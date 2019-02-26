export default {
    template: `
    <form slot="body" @submit.prevent="emitReview">
        <table>
            <tbody>
                <tr>
                    <td>Enter Review:</td>
                </tr>
                <tr>
                    <td>Full name:</td>
                    <td><input type="text" placeholder="Full name" v-model="review.fullName" ref="fullName"/></td>
                </tr>
                <tr>
                    <td>Stars:</td>
                    <td>
                        <select v-model="review.stars">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Read at:</td>
                    <td><input type="date" v-model="review.readAt"></td>
                </tr>
                <tr>
                    <td>Free Text:</td>
                    <td><textarea name="" id="" cols="30" rows="3" v-model="review.freeText"></textarea></td>
                </tr>
                <tr>
                    <td></td>
                    <td align="right"><button type="submit">Save review</button></td>
                </tr>
                </tbody>
            </table>
            
    </form>
    `,
    data() {
        return {
            review: {
                fullName: 'Books Reader',
                stars: 1,
                readAt: '2019-02-25',
                freeText: ''
            }
        }
    },
    methods: {
        emitReview() {
            console.log('Emitting review to Parent');
            this.$emit('reviewed', { ...this.review });
        }
    },
    mounted() {
        // console.log('REFS:', this.$refs);
        if (this.$refs.fullName !== undefined) {
            this.$refs.fullName.focus();
        }
    },
}