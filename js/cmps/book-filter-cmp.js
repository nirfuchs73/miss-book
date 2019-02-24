export default {
    template: `
        <section class="book-filter">
            Title: <input type="text" placeholder="Filter by title" v-on:keyup.enter="emitFilter" v-model="filterBy.title" />
            From price: <input type="text" placeholder="From price" v-on:keyup.enter="emitFilter" v-model="filterBy.fromPrice" />
            To price: <input type="text" placeholder="To price" v-on:keyup.enter="emitFilter" v-model="filterBy.toPrice" />
            <button v-on:click="emitFilter">Filter</button>
        </section> 
    `,
    data() {
        return {
            filterBy: {
                title: '',
                fromPrice: 0,
                toPrice: Infinity
            }
        }
    },
    methods: {
        emitFilter() {
            console.log('Emitting to Parent');
            this.$emit('filtered', { ...this.filterBy })
        }
    }
}