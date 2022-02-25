<template>
    <b-table hover :items="items" :fields="fields"></b-table>
</template>

<script>
export default {
    name: "expense-item",
    props: [
        "items"
    ],
    data () {
        return {
            fields: [
                {
                    key: 'description',
                    sortable: true,
                },
                {
                    key: 'cost',
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
        }
    }
}
</script>