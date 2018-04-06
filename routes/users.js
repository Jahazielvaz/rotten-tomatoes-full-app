var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      id: 1,
      username: 'This is a funny story'
    },
    {
      id: 2,
      username: 'This is an insane story'
    }
  ])
});

module.exports = router;
