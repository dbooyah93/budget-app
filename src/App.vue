<template>
    <div id="app">
        <overview @changedYear="updateYear"/>
        <br/>
        <months-in-review :items="items" @change-month="updateMonth"/>
    </div>
</template>

<script>

import Overview from './components/Overview.vue';
import MonthsInReview from './components/MonthsInReview.vue';
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            year: new Date().getFullYear(),
            months: [
                'January',
                'Feburary',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ],
            month: '',
            items: [],
        }
    },
    methods: {
        updateItems: function (month, year) {
            let request = new XMLHttpRequest();
            request.addEventListener('load', (res, err) => {
                if ( err ) {
                    console.log("there was an error");
                } else {
                    this.items = JSON.parse(res.target.response).items;
                }
            });
            request.addEventListener('error', (err) => {
                console.log({err});
            });
            request.open('GET', 'http://localhost:3000/' + month.toLowerCase() + "/" + year);
            request.send();
        },
        updateYear: function ( selectedYear ) {
            this.year = selectedYear;
            this.updateItems( this.month, this.year );
        },
        updateMonth: function ( selectedMonth ) {
            this.month = selectedMonth;
            this.updateItems( this.month, this.year );
        },
        log: function (e) {
            console.log(e);
        }
    },
    created: function () {
        console.log(this.months)
        this.month = this.months[new Date().getMonth()]
        this.updateItems( this.month, this.year )
    },
    components: {Overview, MonthsInReview}
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
