<template>
    <b-table hover></b-table>
</template>

<script>
export default {
    name: "expense-item",
    props: [
        "description",
        "cost",
        "date",
        "category"
    ],
    data () {
        return {

        }
    }
}
</script>