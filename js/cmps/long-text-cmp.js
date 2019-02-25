export default {
    props: ['txt'],
    template: `
        <div v-if="txt" class="long-text">
            <p>{{displayText}}
                <a v-on:click="togglesText" href="javascript:void(0);">{{linkText}}</a>
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
        displayText() {
            if (this.isMore) return this.txt.substring(0, 100);
            else return this.txt;
        },
        linkText() {
            if (this.txt.length <= 100) return '';
            else if (this.isMore) return 'See More';
            else return 'See Less';
        }
    },

    created() {

    },

    watch: {
        txt: function () {
            this.isMore = true;
        }
    }
}