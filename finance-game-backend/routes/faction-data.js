var express = require('express');
var router = express.Router();
var Pool = require('pg').Pool; 

var config = {
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT, 
  dbname   : process.env.RDS_DBNAME,
}

var pool = new Pool(config);

/* GET faction data listing. */
router.get('/', function(req, res, next) {
  try
  {
    var response = await pool.query('SELECT factionname, alltime, recent, level FROM faction-data-test'); 
    let faction_data = response.rows.map(function(item){
      return {factionname: item.factionname, 
              alltime: item.alltime,
              recent: item.recent, 
              level: item.level};
    });
    console.log('Success! Pulled out the test faction data.');
    res.json({faction_data});
  }
  catch(e)
  {
    console.log('Shit! Something fucked up!'); 
    res.json([
    {
      "factionname": "Jedi Order",
      "alltime": 134671, 
      "recent": 14567,
      "level": 4, 
    },
    {
      "factionname": "Galactic Empire",
      "alltime": 54678,
      "recent": 3240, 
      "level": 3, 
    },
    {
      "factionname": "Rebel Alliance",
      "alltime": 127890,
      "recent": 4500, 
      "level": 1, 
    },
    {
      "factionname": "Rogue",
      "alltime": 127654, 
      "recent": 780,
      "level": 1, 
    },
  ]);
  }
});

module.exports = router;