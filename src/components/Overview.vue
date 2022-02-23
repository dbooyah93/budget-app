<template>
    <div id="app">
        <b-card class="text-start" header="Your Overview">
            <!-- select drop down to the left defining the year to view
                on change make request to server asking for information
                -->
            <!-- to the right is a 4 square grid
                place in it money earned, spent, saved, and remaining in budget (over/under)
                -->
            <b-form-select v-model="selected" :options="options"></b-form-select>
            <e-s-s-r :earned="0" :spent="0" :saved="0" :remaining="0"/>
            <b-card-text>The year selecdddted: {{selected}}</b-card-text>
        </b-card>
    </div>
</template>

<script>
import ESSR from "./ESSR.vue";
export default {
    name: 'overview',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            selected: 2022,
            options: [2019, 2020, 2021, 2022],

        }
    },
    components: {ESSR}
}
</script>