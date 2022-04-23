<template>
<!-- on click of tab
    send request to database for information
 -->
        <b-card-text>
            <b-form v-on:submit.prevent="onSubmit()">
                <b-input-group >
                    <b-form-input class="" v-model="description" placeholder="Description"></b-form-input>
                    <b-form-input class="" v-model="cost" placeholder="Cost"></b-form-input>
                    <b-form-input class="" v-model="date" placeholder="DD/MM/YYY"></b-form-input>
                    <b-form-select class="" v-model="category" :options="categories" placeholder="Category">
                        <template #first>
                            <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                        </template>
                    </b-form-select>
                    <!-- <expense-table :items="items"/> -->
                    <b-button  :type="'submit'" variant="outline-primary">Button</b-button>
                </b-input-group>
            </b-form>
        </b-card-text>
</template>

<script>
import ExpenseTable from "./ExpenseTable.vue";
export default {
    name: 'input-submit',
    props: ["name"],
    data () {
        return {
            description:'',
            cost:'',
            date:(new Date().getDate()) + '/' + new Date().getMonth() + '/' +(new Date().getFullYear()),
            category: null,
            categories: [
                {
                    text: 'Mortgage',
                    value: 'mortgage'
                },
                {
                    text: 'Utilities',
                    value: 'utilities'
                },{
                    text: 'Groceries',
                    value: 'groceries'
                },{
                    text: 'Toiletries',
                    value: 'toiletries'
                },{
                    text: 'Health',
                    value: 'health'
                },{
                    text: 'Cat Stuff',
                    value: 'cat'
                },{
                    text: 'Gasoline',
                    value: 'gasoline'
                },{
                    text: 'Cell',
                    value: 'cell'
                },{
                    text: 'Car Insurance',
                    value: 'carInsurance'
                },{
                    text: 'Loan',
                    value: 'loan'
                },{
                    text: 'Car Supplies',
                    value: 'carSupplies'
                },{
                    text: 'Home Improvement',
                    value: 'homeImprovement'
                },{
                    text: 'Tools',
                    value: 'tools'
                },{
                    text: 'Furniture',
                    value: 'furniture'
                },{
                    text: 'Date',
                    value: 'date'
                },{
                    text: 'Flower',
                    value: 'flower'
                },{
                    text: 'Internet',
                    value: 'internet'
                },{
                    text: 'Hulu',
                    value: 'hulu'
                },{
                    text: 'Spotify',
                    value: 'spotify'
                },{
                    text: 'VPN',
                    value: 'vpn'
                },{
                    text: 'Clothes',
                    value: 'clothes'
                },{
                    text: 'Toys',
                    value: 'toys'
                },{
                    text: 'Gifts',
                    value: 'gifts'
                },{
                    text: 'Eating Out',
                    value: 'eatingOut'
                },{
                    text: 'Recreational',
                    value: 'recreational'
                },{
                    text: 'Miscellaneous',
                    value: 'miscellaneous'
                }
            ]
        }
    },
    methods: {
        log: function (message) {
            console.log(message)
        },
        onSubmit: function () {
            let request = new XMLHttpRequest();
            let endpoint = window.location.href.indexOf('8080') > -1 ? 'http://192.168.86.23:3000' : window.location.href;
            console.log(endpoint)
            console.log(window.location.href);
            request.addEventListener('load', (res, err) => {
                // emit an event with the new item
                // pass this item into the expense table
                if ( err ) {
                    console.log('there was an err');
                } else {
                    // this.getListItems(); // changed variable name for clairty
                    // emit an event that tells expense table to update
                    this.$emit('lineItemSubmitted');
                    console.log('ok');
                }
            });
            request.addEventListener('error', (err) => {
                console.log({err});
            });
            // send object variable with reuqest
            request.open('POST', endpoint + '/' + this.date);
            request.setRequestHeader('Content-Type', 'application/json');
            request.send( JSON.stringify({
                        description: this.description,
                        cost: this.cost,
                        date: this.date,
                        category: this.category
                    }));
        }
    },
    components: {ExpenseTable}
}
</script>