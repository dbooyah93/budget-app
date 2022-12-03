var mysql      = require('mysql');
require('dotenv').config();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'david',
  password : process.env.DBPASS,
  database : 'sada_budgetcutapp'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();