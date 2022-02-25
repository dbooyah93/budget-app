<template>
    <li></li>
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