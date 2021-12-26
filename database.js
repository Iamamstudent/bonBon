var mysql = require('mysql2');

var conn = mysql.createConnection({
  host: '[::1]', // Replace with your host name
  port: 3307,
  user: 'root',      // Replace with your database username
  password: '2020zhfhskTlqkf!',      // Replace with your database password
  database: 'bon_db' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
