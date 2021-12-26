var mysql = require('mysql2');
var express = require('express');   
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
	host: '[::1]',
    port: 3307,
	user: 'root',
	password: '2020zhfhskTlqkf!',
	database: 'nodelogin'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');   //db connection message
  });

var app = express();   //use for web applications(handling HTTP requests)
app.use(session({   //let Express know we'll be using some of its packages
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));   //extract data from our login.html file to determine if the user is logged-in
app.use(bodyParser.json());

app.get('/', function(request, response) {   //display our login.html file to the client
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(request, response) {   //send what the client enters to the server and check it in the mysql database
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3000);   //port 3000