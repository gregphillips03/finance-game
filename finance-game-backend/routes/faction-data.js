var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')
var dbconfig = require("../data/dbconfig"); 

const pool = new Pool(dbconfig); 

/* GET faction data listing. */
router.get('/', async function(req, res, next) {
  var response = await pool.query('SELECT factionname, alltime, recent, level FROM faction_data_test'); 
  var data = response.rows.map(function(item){return {factionname: item.factionname, 
    alltime: item.alltime, 
    recent: item.recent, 
    level: item.level};});
    res.json(data); 
});

module.exports = router;