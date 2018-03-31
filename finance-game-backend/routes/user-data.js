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

/* GET user data listing. */
router.get('/', async function(req, res, next) {
  var response = await pool.query('SELECT username, alltime, recent, level, lastupdate FROM user_data_test'); 
  var data = response.rows.map(function(item){return {username: item.username, 
    alltime: item.alltime, 
    recent: item.recent, 
    level: item.level,
    lastupdate: item.lastupdate};});
    console.log(data); 
    res.json(data); 
});

module.exports = router;