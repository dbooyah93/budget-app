<template>
    <b-card no-body >
        <b-tabs pills card vertical>
            <b-tab title="January" active><month-tab :name="'January'"/></b-tab>
            <b-tab title="Feburary" ><b-card-text>Feburary</b-card-text></b-tab>
            <b-tab title="March" ><b-card-text>March</b-card-text></b-tab>
            <b-tab title="April" ><b-card-text>April</b-card-text></b-tab>
            <b-tab title="May" ><b-card-text>May</b-card-text></b-tab>
            <b-tab title="June" ><b-card-text>June</b-card-text></b-tab>
            <b-tab title="July" ><b-card-text>July</b-card-text></b-tab>
            <b-tab title="August" ><b-card-text>August</b-card-text></b-tab>
            <b-tab title="September" ><b-card-text>September</b-card-text></b-tab>
            <b-tab title="October" ><b-card-text>October</b-card-text></b-tab>
            <b-tab title="November" ><b-card-text>November</b-card-text></b-tab>
            <b-tab title="December" ><b-card-text>December</b-card-text></b-tab>
            <b-tab title="Calculator" ><b-card-text>Calculator</b-card-text></b-tab>
        </b-tabs>
    </b-card>
</template>

<script>
import MonthTab from "./MonthTab.vue";
export default {
    name: 'months-in-review',
    data () {
        return {
        }
    },
    components: {MonthTab}
}
</script>