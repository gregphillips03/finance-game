var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')(/*options*/);

var connection = {
  host     : process.env.RDS_HOSTNAME,
  port     : process.env.RDS_PORT,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  dbname   : process.env.RDS_DBNAME
}

/* GET faction data listing. */
router.get('/', function(req, res, next) {
  var db = pgp(connection); // database instance;
  console.log("AAAAAaaaagghahaahhhhhh!!!!"); 
  db.any('SELECT factionname, alltime, recent, level FROM gregtest').then(item => {res.json(item)}).catch(error => {console.log(error)});  
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
  res.end(); 
});

module.exports = router;