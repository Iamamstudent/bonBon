var express = require('express');
var router = express.Router();
var db=require('../database');
router.get('/form', function(req, res, next) {    //req-receive data from client, router.get() is used to get request
res.render('/questions');    //res.render() is a function used to render a view and send the rendered HTML string to the client
});
router.post('/create', function(req, res, next) {    //router.post() is used to post requests to the router
  
  // store all the user input data
  const userDetails=req.body;    //req.body object allows you to access data in a string or JSON object from the client side
                                 //generally used to receive data through POST and PUT requests in the Express server
  // insert user data into users table
  var sql = 'INSERT INTO bon_tb SET ?';
  db.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User dat is inserted successfully "); 
  });
 res.redirect('/users/form');  // redirect to user form page after inserting the data
}); 
module.exports = router;