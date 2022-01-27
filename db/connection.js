const mysql = require('mysql2');

// Connecting to MySQL Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Loulousr2010!',
        database: 'election'
    },
    console.log('Connected to the election database!')
);

module.exports = db;