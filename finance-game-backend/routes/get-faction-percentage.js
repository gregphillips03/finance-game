var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'masterkey',
  host: 'finance-game-db.cm0naqqd1wbd.us-west-2.rds.amazonaws.com',
  database: 'gregtest',
  password: 'chickendog123',
  port: 5432,
})

/* GET faction percentage of total plays */
router.get('/', async function(req, res, next) {
  var faction = req.query.faction; 
  console.log(faction); 
  var resTotalPlays = await pool.query('SELECT SUM(numplays) FROM faction_plays');
  var resFactionPlays = await pool.query('SELECT SUM(numplays) FROM faction_plays ' +
                                      'WHERE factionname = $1', [faction]);
  var totalPlays = resTotalPlays.rows.map(function(item){return item.sum}); 
  var factionPlays = resFactionPlays.rows.map(function(item){return item.sum}); 

  console.log(totalPlays); 
  console.log(factionPlays);
  var perc = parseInt((factionPlays / totalPlays)*100); 
  var data = [{percentage: perc}]; 
  console.log(data)
  res.json(data); 
});

module.exports = router;