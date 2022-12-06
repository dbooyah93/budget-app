var mysql      = require('mysql');
require('dotenv').config();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.USERNAME,
  password : process.env.DBPASS,
  database : 'sada_budgetcutapp'
});
 
connection.connect();

let newUser = function(userName, checkingAccountId, savingsAccountId) {
  return "INSERT INTO `sada_budgetcutapp`.`users` (`user_name`) VALUES ('test_1');";
}

let newCheckingAccount = function () {}
 
connection.query(newUser('node_test'), function (error, results, fields) {
  if (error) {
    throw error;
  }
  console.log('The results are: ', results, fields);
});
 
connection.end();