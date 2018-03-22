var express = require('express');
var router = express.Router();

/* GET faction data listing. */
router.get('/', function(req, res, next) {
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
});

module.exports = router;