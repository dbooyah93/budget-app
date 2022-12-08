var mysql      = require('mysql');
require('dotenv').config();
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : process.env.USERNAME,
    password : process.env.DBPASS,
    database : 'sada_budgetcutapp'
});

connection.connect();

let newUser = function ( userName, checkingAccountId, savingsAccountId ) {
    return `INSERT INTO 'sada_budgetcutapp'.'users' (${user_name}) VALUES ('test_1');`;
}

let newCheckingAccount = function () {
    return "";
}

let newEspense = function ( userId, checkingsAccountId, savingsAccountId, userDescription ) {
    // Keep users checking and savings account numbers as a part of their cookies
    // Use that information to send the correct checking or savings account information over to here
    if ( checkingsAccountId ) {

        // query database for checking account
        // subtract cost from checking account balance
        // update database checking account with the difference
        // Insert expense with checking account number and user id 
        return `INSERT INTO 'sada_budgetcutapp'.'expenses' ('id', 'description', 'cost', 'created_at', 'user_id', 'is_checking', 'account_id', 'category_id') VALUES ('', ${userDescription}, '35', '', ${userId}, '1', ${checkingsAccountId}, '1');`;
    } else if ( savingsAccountId ) {
        // Subtract money from account
        // update expense with the user, and account ID
        return `INSERT INTO 'sada_budgetcutapp'.'expenses' (${user_name}) VALUES ('test_1');`;
    }
    return `INSERT INTO 'sada_budgetcutapp'.'users' (${user_name}) VALUES ('test_1');`;

}

connection.query(newUser('node_test'), function (error, results, fields) {
    if (error) {
        throw error;
    }
    console.log('The results are: ', results, fields);
});

connection.end();