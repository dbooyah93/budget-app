var mysql      = require('mysql2');
const Connection = require('mysql/lib/Connection');
require('dotenv').config();
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Brother1000101?',
    database : 'sada_budgetcutapp'
});

connection.connect();
connection.on('error', (err)=>{
    console.log(err);
})