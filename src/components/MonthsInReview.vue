<template>
    <b-card no-body >
        <b-card-header>{{selected}}</b-card-header>
        <b-tabs @activate-tab="onTabChanged" pills card vertical>
            <b-tab v-for="month in months" :key="month" :title="month" :active="month === months[initialMonth]">
                <b-card-text>
                    <expense-table :items="items"/>
                </b-card-text>
            </b-tab>
            <!-- calculator should be it's own component on the app layer -->
        </b-tabs>
    </b-card>
</template>

<script>
import MonthTab from "./MonthTab.vue";
import ExpenseTable from "./ExpenseTable.vue";
export default {
    name: 'months-in-review',
    props: [
        'items',
        'initialMonth'
    ],
    data () {
        return {
            selected: "March",
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
            }
        },
        selectCurrentMonth: function () {
            this.selected = this.months[new Date().getMonth()];
            this.$emit('change-month', this.selected);
        }
    },
    created: function () {
        this.selectCurrentMonth();
    },
    components: {MonthTab, ExpenseTable}
}
</script>