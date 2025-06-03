const mysql = require('mysql');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'masterisolation'
});

// Connect to the MySQL server
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting to MySQL server: ' + err.stack);
        return;
    }

    console.log('Connected to MySQL server');
    
    // Create the authentication table
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS UsersPrivateData (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(255) NOT NULL,
        lastName VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        agreeToTerms BOOLEAN DEFAULT false,
        agreeToPrivacyPolicy BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE KEY unique_email (email)
        )
    `;


    connection.query(createTableQuery, function(err, results, fields) {
        if (err) {
        console.error('Error creating table: ' + err.stack);
        return;
        }

    console.log('Table created successfully');
    
    // Close the connection after table creation
    connection.end();
    });
});

