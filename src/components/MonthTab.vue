<template>
    <b-tab title="January" active><b-card-text>{{name}}</b-card-text></b-tab>
</template>

<script>
export default {
    name: 'month-tab',
    props: ["name"],
    data () {
        return {
        }
    },

}
</script>