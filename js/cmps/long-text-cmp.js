export default {
    props: ['txt'],
    template: `
        <div v-if="txt" class="long-text">
            <p v-if="isMore">{{showLess}}
                <a v-on:click="togglesText" href="javascript:void(0);">See More</a>
            </p>
            <p v-else-if="!isMore">{{txt}}
                <a v-on:click="togglesText" href="javascript:void(0);">See Less</a>
            </p>
        </div>
    `,
    data() {
        return {
            isMore: true
        }
    },
    methods: {
        togglesText() {
            this.isMore = !this.isMore;
        }
    },
    computed: {
        showLess() {
            return this.txt.substring(0, 100);
        }
    },

    created() {
        console.log(this.isMore);
        // this.isMore = false;
    },

    watch: {
        txt: function () {
            this.isMore = true
        }
    }
}