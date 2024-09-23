
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const pool = require('./database/db.js');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from 'public' directory
app.use(express.static('public'));

// User routes
app.use('/api', userRoutes);

// Root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "./public/index.html"); // serve the HTML file
});

// User routes
app.use('/api/users', userRoutes);

// Database connection
pool.getConnection((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});