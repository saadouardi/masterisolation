const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Create a connection pool to the MySQL server
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'masterisolation'
});

// Route for handling form submissions
app.post('/submit', function(req, res) {
    const { firstName, lastName, email, password, agreeToTerms, agreeToPrivacyPolicy } = req.body;

    // Use the connection pool to execute the SQL query
    pool.query('INSERT INTO UsersPrivateData (firstName, lastName, email, password, agreeToTerms, agreeToPrivacyPolicy) VALUES (?, ?, ?, ?, ?, ?)', [firstName, lastName, email, password, agreeToTerms, agreeToPrivacyPolicy], function(err, results, fields) {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).send('Error inserting data');
            return;
        }
    
        console.log('Data inserted successfully');
        res.status(200).send('Data inserted successfully');
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
