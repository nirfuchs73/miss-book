
import carPreview from './car-preview-cmp.js';


export default {
    template: `
        <section class="car-list">
            <h1>Car List</h1>
            <ul>
                <car-preview v-for="(currCar, idx) in cars"
                             :car="currCar" :idx="idx+1" :key="currCar.id">
                </car-preview>
            </ul>
        </section>
    `,
    props: ['cars'],
    components: {
        carPreview
    }
}