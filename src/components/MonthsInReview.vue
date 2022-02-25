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
            items: [
                { description: 'Milk and eggs from Walmart', cost: 9.39, date: "1/2/2022", category: "Groceries"},
                { description: '11.9 Gallons', cost: 39.39, date: "1/2/2022", category: "Gasoline"},
                { description: 'Tacos from TB', cost: 19.39, date: "1/4/2022", category: "Eating Out"},
                { description: 'Kitty litter, Cat foot', cost: 43.39, date: "1/5/2022", category: "Cat Supplies"},
                { description: 'Mortgage', cost: 989, date: "1/2/2022", category: "Mortgage"}
            ]
        }
    },
    methods: {
        onTabChanged: function (e) {
            if ( e <= 11 ) {
                // api call for the selected month
                // set this.items to the response
                this.selected = this.months[e];
            }
        }
    },
    components: {MonthTab, ExpenseTable}
}
</script>