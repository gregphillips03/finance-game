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

/* GET user data listing. */
router.get('/', function(req, res, next) {
  res.json([
  {
    "username": "joe.camel@mail.umw.edu",
    "img": "https://avatars0.githubusercontent.com/u/19273069?s=460&v=4",
    "alltime": 2240, 
    "recent": 431, 
    "lastUpdate": "2016-03-06T00:20:14.620Z", 
    "level": 5
  },
  {
    "username": "spider.man@mail.umw.edu",
    "img": "/images/faces-female/FA01.png",
    "alltime": 421, 
    "recent": 389, 
    "lastUpdate": "2016-03-05T16:15:36.014Z", 
    "level": 2
  }, 
  {
    "username": "bat.man@mail.umw.edu",
    "img": "",
    "alltime": 742, 
    "recent":371, 
    "lastUpdate": "2016-03-05T16:17:06.401Z", 
    "level": 3
  },
  {
    "username": "poison.ivy@mail.umw.edu",
    "img": "",
    "alltime": 9876, 
    "recent": 1000, 
    "lastUpdate": "2016-04-05T16:17:06.401Z", 
    "level": 8
  },
  {
    "username": "harley.quinn@mail.umw.edu",
    "img": "",
    "alltime": 3502, 
    "recent": 20, 
    "lastUpdate": "2016-10-05T16:17:06.401Z", 
    "level": 6
  },
  {
    "username": "dirk.diggler@mail.umw.edu",
    "img": "",
    "alltime": 3590, 
    "recent": 40, 
    "lastUpdate": "2018-10-05T16:17:06.401Z", 
    "level": 6
  },
  {
    "username": "jim.jones@mail.umw.edu",
    "img": "https://avatars0.githubusercontent.com/u/19273069?s=460&v=4",
    "alltime": 3245, 
    "recent": 0, 
    "lastUpdate": "2016-03-06T00:20:14.620Z", 
    "level": 5
  },
  {
    "username": "corn.holio@mail.umw.edu",
    "img": "",
    "alltime": 6544, 
    "recent": 378, 
    "lastUpdate": "2016-03-05T16:15:36.014Z", 
    "level": 4
  }, 
  {
    "username": "madison.ivy@mail.umw.edu",
    "img": "",
    "alltime": 3567, 
    "recent": 1202, 
    "lastUpdate": "2016-03-05T16:17:06.401Z", 
    "level": 3
  },
  {
    "username": "rachel.roxxx@mail.umw.edu",
    "img": "",
    "alltime": 12899, 
    "recent": 928, 
    "lastUpdate": "2016-04-05T16:17:06.401Z", 
    "level": 8
  },
  {
    "username": "sheldon.cooper@mail.umw.edu",
    "img": "",
    "alltime": 7865, 
    "recent": 6578, 
    "lastUpdate": "2016-10-05T16:17:06.401Z", 
    "level": 8
  },
  {
    "username": "samwise.gamgee@mail.umw.edu",
    "img": "",
    "alltime": 567, 
    "recent": 72, 
    "lastUpdate": "2018-10-05T16:17:06.401Z", 
    "level": 2
  },
  {
    "username": "optimus.prime@mail.umw.edu",
    "img": "https://avatars0.githubusercontent.com/u/19273069?s=460&v=4",
    "alltime": 5600, 
    "recent": 523, 
    "lastUpdate": "2016-03-06T00:20:14.620Z", 
    "level": 6
  },
  {
    "username": "carrie.fisher@mail.umw.edu",
    "img": "",
    "alltime": 8745, 
    "recent": 0, 
    "lastUpdate": "2016-03-05T16:15:36.014Z", 
    "level": 4
  }, 
  {
    "username": "cosmo.kramer@mail.umw.edu",
    "img": "",
    "alltime": 23, 
    "recent": 5, 
    "lastUpdate": "2016-03-05T16:17:06.401Z", 
    "level": 1
  },
  {
    "username": "dwight.schrute@mail.umw.edu",
    "img": "",
    "alltime": 22908, 
    "recent": 2987, 
    "lastUpdate": "2016-04-05T16:17:06.401Z", 
    "level": 12
  },
  {
    "username": "hamburgler.mcburgler@mail.umw.edu",
    "img": "",
    "alltime": 2786, 
    "recent": 502, 
    "lastUpdate": "2016-10-05T16:17:06.401Z", 
    "level": 3
  },
  {
    "username": "snoop.doggity.dog@mail.umw.edu",
    "img": "",
    "alltime": 45670, 
    "recent": 1278, 
    "lastUpdate": "2018-10-05T16:17:06.401Z", 
    "level": 10
  },
  {
    "username": "bon.jovi@mail.umw.edu",
    "img": "",
    "alltime": 2908, 
    "recent": 2107, 
    "lastUpdate": "2016-04-05T16:17:06.401Z", 
    "level": 7
  },
  {
    "username": "charlie.sheen@mail.umw.edu",
    "img": "",
    "alltime": 6969, 
    "recent": 501, 
    "lastUpdate": "2016-10-05T16:17:06.401Z", 
    "level": 5
  },
  {
    "username": "omg.lexi.belle@mail.umw.edu",
    "img": "",
    "alltime": 46750, 
    "recent": 5678, 
    "lastUpdate": "2018-10-05T16:17:06.401Z", 
    "level": 13
  },
  {
    "username": "faye.raegen@mail.umw.edu",
    "img": "",
    "alltime": 15750, 
    "recent": 478, 
    "lastUpdate": "2018-10-05T16:17:06.401Z", 
    "level": 11
  },
]);
});

module.exports = router;