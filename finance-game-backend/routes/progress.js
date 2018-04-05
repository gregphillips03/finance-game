var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')
var dbconfig = require("../data/dbconfig"); 

const pool = new Pool(dbconfig); 

/* GET progress data. */
router.get('/', async function(req, res, next) {
  var user = req.query.user;  
  var response = await pool.query('SELECT total, ' +
  	'more, red, green FROM user_progress_test WHERE username = $1', [user]); 
  var data = response.rows.map(function(item){return {total: item.total, 
    more: item.more, 
    red: item.red,
    green: item.green};});
    res.json(data); 
});

module.exports = router;