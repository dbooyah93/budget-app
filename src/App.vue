<template>
    <div id="app">
        <overview @changedYear="updateYear"/>
        <br/>
        <months-in-review :initialMonth="new Date().getMonth()" :items="listItems" @change-month="updateMonth" @successfulSubmission="getListItems(month, year)"/>
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
            listItems: [],
        }
    },
    methods: {
        postListItem: function ( listItem ){
            let request = new XMLHttpRequest();
            let date = new Date().getDay();
            let month = new Date().getMonth();
            let year = new Date().getFullYear();
            if ( listItem !== undefined ) {
                date = listItem.split('/')[0];
                month = listItem.split('/')[1];
                year = listItem.split('/')[2];
            }
            request.addEventListener('load', (res, err) => {
                if ( err ) {
                    console.log('there was an err');
                } else {
                    this.getListItems(); // changed variable name for clairty
                    console.log('ok');
                }
            });
            request.addEventListener('error', (err) => {
                console.log({err});
            });
            // send listItem variable with reuqest
            request.open('POST', 'http://192.168.86.23:3000/' + date + '/' + month + '/' + year);
            request.send();
        },
        getListItems: function (month = this.month, year = this.year) { // updated defaults to help internal commands
            // on success from input-submit rerun this function
            let request = new XMLHttpRequest();
            request.addEventListener('load', (res, err) => {
                if ( err ) {
                    console.log("there was an error");
                } else {
                    this.listItems = JSON.parse(res.target.response).items;
                }
            });
            request.addEventListener('error', (err) => {
                console.log({err});
            });
            request.open('GET', 'http://192.168.86.23:3000/' + month.toLowerCase() + "/" + year);
            request.send();
        },
        updateYear: function ( selectedYear ) {
            this.year = selectedYear;
            this.getListItems( this.month, this.year );
        },
        updateMonth: function ( selectedMonth ) {
            this.month = selectedMonth;
            this.getListItems( this.month, this.year );
        },
        log: function (e) {
            console.log(e);
        }
    },
    created: function () {
        this.month = this.months[new Date().getMonth()]
        this.getListItems( this.month, this.year )
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
