var express = require('express');
var router = express.Router();

/* GET faction data listing. */
router.get('/', function(req, res, next) {
  res.json([
  {
    "total": 89,
    "more": 50,
    "red": 10, 
    "green": 72,
  },
]);
});

module.exports = router;