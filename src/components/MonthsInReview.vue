<template>
    <b-card no-body >
        <b-card-header>{{selected}}</b-card-header>
        <b-tabs @activate-tab="onTabChanged" pills card vertical>
            <b-tab v-for="month in months" :key="month" :title="month">
                <b-card-text>
                    <expense-table :items="items"/>
                </b-card-text>
                <input-submit @lineItemSubmitted="bubbleSubmitSuccess" />
            </b-tab>
            <b-tab v-on:click="selected='Calculator'" title="Calculator" >
            </b-tab>
        </b-tabs>
    </b-card>
</template>

<script>
import MonthTab from "./MonthTab.vue";
import ExpenseTable from "./ExpenseTable.vue";
import InputSubmit from "./InputSubmit.vue";

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
        onTabChanged: function ( monthIndex ) {
            if ( monthIndex <= 11 ) {
                // api call for the selected month
                // set this.items to the response
                this.selected = this.months[ monthIndex ];
                this.$emit('change-month', this.selected);
                console.log(this.selected);
            }
        },
        selectCurrentMonth: function () {
            this.selected = this.months[new Date().getMonth()];
            this.$emit('change-month', this.selected);
        },
        bubbleSubmitSuccess: function ( obj ) {
            this.$emit('successfulSubmission', obj); 
            console.log('success from inputsubmit', {obj});
        }
    },
    created: function () {
        this.selectCurrentMonth();
    },
    components: {MonthTab, ExpenseTable, InputSubmit}
}
</script>