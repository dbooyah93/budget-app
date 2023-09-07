var mysql      = require('mysql2');
require('dotenv').config();

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'seeder',
    password : 'seed1t?',
    database : 'test_schema'
});

connection.connect();
connection.on('error', (err)=>{
    console.log(err);
});
connection.end();