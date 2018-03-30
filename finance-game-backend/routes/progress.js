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

/* GET progress data. */
router.get('/', async function(req, res, next) {
  //var user = req.query.user;
  var user = 'wphilli2@mail.umw.edu';  
  console.log(user); 
  var response = await pool.query('SELECT total, ' +
  	'more, red, green FROM user_progress_test WHERE username = $1', [user]); 
  var data = response.rows.map(function(item){return {total: item.total, 
    more: item.more, 
    red: item.red,
    green: item.green};});
    console.log(data); 
    res.json(data); 
});

module.exports = router;