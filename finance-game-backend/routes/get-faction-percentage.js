var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')
var dbconfig = require("../data/dbconfig"); 

const pool = new Pool(dbconfig);

/* GET faction percentage of total plays */
router.get('/', async function(req, res, next) {
  var faction = req.query.faction; 
  var resTotalPlays = await pool.query('SELECT SUM(numplays) FROM faction_plays');
  var resFactionPlays = await pool.query('SELECT SUM(numplays) FROM faction_plays ' +
                                      'WHERE factionname = $1', [faction]);
  var totalPlays = resTotalPlays.rows.map(function(item){return item.sum}); 
  var factionPlays = resFactionPlays.rows.map(function(item){return item.sum}); 
  var perc = parseInt((factionPlays / totalPlays)*100); 
  var data = [{percentage: perc}]; 
  res.json(data); 
});

module.exports = router;