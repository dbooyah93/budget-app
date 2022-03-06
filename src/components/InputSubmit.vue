<template>
<!-- on click of tab
    send request to database for information
 -->
        <b-card-text>

            <b-input-group>
                <b-form-input class="" v-model="text" placeholder="Description"></b-form-input>
                <b-form-input class="" v-model="text1" placeholder="Cost"></b-form-input>
                <b-form-input class="" v-model="date" placeholder="Date"></b-form-input>
                <b-form-input class="" v-model="text3" placeholder="Category"></b-form-input>
                <!-- <expense-table :items="items"/> -->
            </b-input-group>

        </b-card-text>
</template>

<script>
import ExpenseTable from "./ExpenseTable.vue";
export default {
    name: 'month-tab',
    props: ["name"],
    data () {
        return {
            text:'',
            text1:'',
            date:(new Date().getDay() - 1) + '/' + (new Date().getMonth() + 1) + '/' +(new Date().getFullYear()),
            text3:''
        }
    },
    beforeUpdate: function () {
        console.log('before update')
    },
    components: {ExpenseTable}
}
</script>