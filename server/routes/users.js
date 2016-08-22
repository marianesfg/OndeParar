var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Testing......');

  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
  });

});

router.post('/', function(req, res) {

    console.log('Creating', req.body);

    fs.appendFile( __dirname + "/" + "users.json", req.body, function (err, data) {
        res.send( 'User created!!!' );
    });

});

module.exports = router;
