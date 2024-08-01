// db.js
const mysql = require('mysql2/promise');

// Create a pool of connections with hardcoded values
const connection = mysql.createPool({
  host: 'grafana-testing.cx4aeiycs6rj.ap-northeast-1.rds.amazonaws.com',// Replace with your DB host
  port: 6638,
  user: 'admin',         // Replace with your DB user
  password: 'Shekhar101010', // Replace with your DB password
  database: 'sample_user', // Replace with your DB name
  connectionLimit: 10,  // Adjust the pool size as needed
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
