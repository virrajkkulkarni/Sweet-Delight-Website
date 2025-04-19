const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',  // or your database server IP
    user: 'root',       // your MySQL username
    password: '',       // your MySQL password (leave blank if none)
    database: 'user_database' // Ensure this matches your actual DB name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL Database');
});
