var express = require('express');   //imports Express in our file
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {   //app.get tells what to do when a GET request at the given route is called. req and res represents the HTTP request
  res.render('index', { title: 'Express' });   
});

module.exports = router;

app.listen(3000);   //binds and listens for connections on the specigied host and port. Host param is needed when you deploy your app to the cloud