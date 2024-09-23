const mysql = require('mysql2');

// Create the connection pool to the database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'awadepavan8805@',
    database: 'appoinment' // Ensure this is the correct name
});

// Optional: Test connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database');
    connection.release(); // Release the connection back to the pool
});

// Export the pool
module.exports = pool;