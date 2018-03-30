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

/* GET faction data listing. */
router.get('/', async function(req, res, next) {
  var response = await pool.query('SELECT factionname, alltime, recent, level FROM faction_data_test'); 
  var data = response.rows.map(function(item){return {factionname: item.factionname, 
    alltime: item.alltime, 
    recent: item.recent, 
    level: item.level};});
    console.log(data); 
    res.json(data); 
    //pool.end()
});

module.exports = router;