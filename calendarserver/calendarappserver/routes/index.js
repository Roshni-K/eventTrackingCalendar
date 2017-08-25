var express = require('express');
var router = express.Router();
var dbConnection = require('../db');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Calendar App' });
// });


var response;
dbConnection.query('Select * from eventTable;', function (err, rows, fields) {
  if (err) throw err;
  response = rows;
});

router.get('/', function(req, res, next) {
  res.send(response);
});
module.exports = router;
