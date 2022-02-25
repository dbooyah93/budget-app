<template>
<!-- on click of tab
    send request to database for information
 -->
        <b-card-text>
            <expense-table :items="items"/>
        </b-card-text>
</template>

<script>
import ExpenseTable from "./ExpenseTable.vue";
export default {
    name: 'month-tab',
    props: ["name"],
    data () {
        return {
        }
    },
    beforeUpdate: function () {
        console.log('before update')
    },
    components: {ExpenseTable}
}
</script>