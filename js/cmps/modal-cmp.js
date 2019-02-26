export default {
    props: ['header', 'body', 'footer'],
    template: `
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <button class="modal-default-button" v-on:click="emitClose">x</button>
                    <!--<div class="modal-header">
                        <slot name="header">
                        </slot>
                    </div>-->
                    <div class="modal-body">
                        <slot name="body">
                        </slot>
                    </div>
                    <!--<div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-default-button" v-on:click="emitClose">Close</button>
                        </slot>
                    </div>-->
                </div>
            </div>
        </div>
  </transition>
    `,
    methods: {
        emitClose() {
            this.$emit('close');
        },
    }

}