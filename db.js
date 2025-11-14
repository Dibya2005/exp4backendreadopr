const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'db17012005',
    database: 'exp3db'
});

db.connect((err) => {
    if (err) {
        console.log("Database connection error:", err);
    } else {
        console.log("Connected to MySQL Database!");
    }
});

module.exports = db;
