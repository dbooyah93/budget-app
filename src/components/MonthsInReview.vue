<template>
    <b-card no-body >
        <b-card-header>{{selected}}</b-card-header>
        <b-tabs @activate-tab="onTabChanged" pills card vertical>
            <b-tab v-for="month in months" :key="month" :title="month"/>
            <b-tab v-on:click="selected='Calculator'" title="Calculator" ><b-card-text>Calculator</b-card-text></b-tab>
        </b-tabs>
    </b-card>
</template>

<script>
import MonthTab from "./MonthTab.vue";
export default {
    name: 'months-in-review',
    data () {
        return {
            selected: "January",
            months: [
                'January',
                'Feburary',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ]
        }
    },
    methods: {
        onTabChanged: function (e) {
            if ( e <= 11 ) {
                this.selected = this.months[e];
            }
        }
    },
    components: {MonthTab}
}
</script>