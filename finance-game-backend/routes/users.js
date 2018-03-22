var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
  	{id: 1, username: "wphilli2@mail.umw.edu"}, 
  	{id: 2, username: "admin@example.com"}
  	]);
});

module.exports = router;
