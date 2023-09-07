var mysql      = require('mysql2');
require('dotenv').config();

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'seeder',
    password : 'seed1t?',
    database : 'test_schema'
});

const createTable = "CREATE TABLE IF NOT EXISTS `test_schema`.`expenses` (`id` INT NOT NULL AUTO_INCREMENT,`Description` VARCHAR(300) NULL,`Date added` TIMESTAMP NOT NULL,`Date updated` TIMESTAMP NULL,`Date deleted` TIMESTAMP NULL,`Date purchased` DATE NULL,`Category` INT NULL,`Cost` DECIMAL(19,4) NULL,PRIMARY KEY (`id`),UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);";

connection.connect();
connection.on('error', (err)=>{
    console.log('General error:' + err);
});

let createTableCB = function (err, results) {
    if (err) {
        console.error("Create table error:" + err);
    }
    if (results) {
        console.log("Create table results: ");
        console.log(results);
    }
};
connection.query(createTable, createTableCB)



connection.end();