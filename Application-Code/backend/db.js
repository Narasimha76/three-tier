// db.js
const mysql = require('mysql2/promise');
// Create a pool of connections
const connection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mydatabase',
  connectionLimit: 10, // Adjust the pool size as needed
});

// Test the connection
const testConnection = async () => {
  try {
    const [rows] = await connection.query('SELECT 1');
    console.log('Connected to the MySQL database.');
  } catch (error) {
    console.error('Could not connect to the MySQL database.', error);
    process.exit(1);
  }
};

// Export the connection pool and test function
module.exports = {
  connection,
  testConnection,
};
