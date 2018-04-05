var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')
var dbconfig = require("../data/dbconfig"); 

const pool = new Pool(dbconfig); 

/* GET user data listing. */
router.get('/', async function(req, res, next) {
  var response = await pool.query('SELECT username, alltime, recent, level, lastupdate FROM user_data_test'); 
  var data = response.rows.map(function(item){return {username: item.username, 
    alltime: item.alltime, 
    recent: item.recent, 
    level: item.level,
    lastupdate: item.lastupdate};});
    res.json(data); 
});

module.exports = router;