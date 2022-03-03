<template>
    <b-card no-body >
        <b-card-header>{{selected}}</b-card-header>
        <b-tabs @activate-tab="onTabChanged" pills card vertical>
            <b-tab v-for="month in months" :key="month" :title="month">
                <b-card-text>
                    <expense-table :items="items"/>
                </b-card-text>
            </b-tab>
            <b-tab v-on:click="selected='Calculator'" title="Calculator" >
            </b-tab>
        </b-tabs>
    </b-card>
</template>

<script>
import MonthTab from "./MonthTab.vue";
import ExpenseTable from "./ExpenseTable.vue";
export default {
    name: 'months-in-review',
    props: [
        'items'
    ],
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
            ],
        }
    },
    methods: {
        onTabChanged: function (e) {
            if ( e <= 11 ) {
                // api call for the selected month
                // set this.items to the response
                this.selected = this.months[e];
                this.$emit('change-month', this.selected);
                console.log(this.selected);
            }
        }
    },
    components: {MonthTab, ExpenseTable}
}
</script>