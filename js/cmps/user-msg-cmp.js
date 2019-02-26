import { eventBus, SHOW_MSG } from '../event-bus.js';

export default {
    props: ['type'],
    template: `
    <div v-show="isShow" v-on:click="onClose" class="user-msg" v-bind:class="classObject">
        {{message.msg}} <button v-on:click="onClose">x</button>
    </div>
    `,
    data() {
        return {
            // msg: '',
            isShow: false,
            message: {
                msg: '',
                type: ''
            }
        }
    },
    methods: {
        onClose() {
            this.isShow = false;
        }

    },
    computed: {
        classObject() {
            return {
                'red-bg': this.message.type === 'error',
                'green-bg': this.message.type === 'success'
            }
        }
    },

    created() {
        eventBus.$on(SHOW_MSG, message => {
            // console.log(message);
            this.message = message;
        });
    },

    watch: {
        message: function () {
            this.isShow = true;
        }
    }
}