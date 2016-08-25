var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Testing......');

  fs.readFile( __dirname + "/jsons/users/" + "users.json", 'utf8', function (err, data) {
    res.end( data );
  });

});

router.get('/:id', function(req, res, next) {
  console.log('Testing......', req.params.id);

  fs.readFile( __dirname + "/jsons/users/" + "user.json", 'utf8', function (err, data) {
    res.end( data );
  });

});

router.post('/', function(req, res) {

    fs.appendFile( __dirname + "/jsons/" + "post_success.json", req.body, function (err, data) {
        res.send( 'User created!!!' );
    });

});

router.delete('/', function(req, res) {

    console.log('Creating', req.body);

    fs.appendFile( __dirname + "/jsons/" + "delete_success.json", req.body, function (err, data) {
        res.send( 'User created!!!' );
    });

});


module.exports = router;
