<template>
    <b-card no-body >
        <b-tabs pills card vertical>
            <month-tab :name="'January'"/>
            <month-tab :name="'Feburary'"/>
            <month-tab :name="'March'"/>
            <month-tab :name="'April'"/>
            <month-tab :name="'May'"/>
            <month-tab :name="'June'"/>
            <month-tab :name="'July'"/>
            <month-tab :name="'August'"/>
            <month-tab :name="'September'"/>
            <month-tab :name="'October'"/>
            <month-tab :name="'November'"/>
            <month-tab :name="'December'"/>
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