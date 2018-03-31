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

/* POST increment number of times the faction has been played. */
router.post('/', async function(req, res, next) {
  try {
        var faction = req.body.faction; 
        var amount = req.body.amount; 
        var response = await pool.query('UPDATE faction_plays SET numplays = numplays + $2 ' +
                                        'WHERE factionname = $1',[faction, amount]);
        res.end();  
      } catch (error){
        console.log(error); 
      }
});

module.exports = router;