<template>
    <div id="app">
        <overview @changedYear="requestYear"/>
        <br/>
        <months-in-review/>
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
            year: 0,
            month: '',
        }
    },
    methods: {
        asyncYear: function (year) {
            let request = new XMLHttpRequest();
            request.addEventListener('load', (res, err) => {
                if ( err ) {
                    console.log("there was an error");
                } else {
                    console.log( res.target.response );
                }
            });
            request.addEventListener('error', (err) => {
                console.log({err});
            });
            request.open('GET', 'http://localhost:3000/january/' + year);
            request.send();
        },
        requestYear: function (e) {
            this.asyncYear(e);
        },
        log: function (e) {
            console.log(e);
        }
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
