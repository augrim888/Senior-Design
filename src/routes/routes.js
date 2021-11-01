const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'Europ@123!',
  database : 'seniordesign',
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
// Creating a GET route that returns data from the 'users' table.
app.get('/user_info', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM user_info', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.post('/login', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query('SELECT * FROM user_info WHERE user = "' + req.body.user + '"', function (error, results, fields) {
    //console.log('SELECT * FROM user_info WHERE user = "' + req.body.user + '"')
    // If some error occurs, we throw an error.
    if (error) throw error;
    console.log(results[0].user)
    if(req.body.password == results[0].password)
    {
      returnstatus = "LOGIN SUCCESS"
    }
    else
    {
      returnstatus = "LOGIN FAILED"
    }
    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(returnstatus)
  });
});
});

// Starting our server.
app.listen(3307, () => {
 console.log('Go to http://localhost:3307/user_info so you can see the data.');
});