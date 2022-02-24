<template>
<!-- on click of tab
    send request to database for information
 -->
        <b-card-text>
            <b-table hover :items="items" :fields="fields"></b-table>
        </b-card-text>
</template>

<script>
export default {
    name: 'month-tab',
    props: ["name"],
    data () {
        return {
            fields: [
                {
                    key: 'description',
                    sortable: true,
                },
                {
                    key: 'expence',
                    sortable: true,
                },
                {
                    key: 'date',
                    sortable: true,
                },
                {
                    key: 'category',
                    sortable: true,
                }
            ],
            items: [
                { description: 'Milk and eggs from Walmart', expence: 9.39, date: "1/2/2022", category: "Groceries"}
            ]
        }
    },
    beforeUpdate: function () {
        console.log('before update')
    }

}
</script>