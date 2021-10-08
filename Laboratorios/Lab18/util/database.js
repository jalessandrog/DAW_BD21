const mysql = require('mysql2');

const BD = "DEV";

let host = '';
let user = '';
let database = '';
let password = '';

if (BD === "DEV") {
    host = 'localhost';
    user = 'root';
    database = 'heroes';
    password = '';
} else if (BD == "PROD") {
    host = 'localhost';
    user = 'heroe';
    database = 'heroes';
    password = '';
}

const pool = mysql.createPool({
    host: host,
    user: user,
    database: database,
    password: password,
});

module.exports = pool.promise();