const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
  res.json({
    {
      id: 1,
      title: 'Fight Club',
      rating: '4.5'
    },
    {
      id: 2,
      title: 'American Gangster',
      rating: '4.3'
    }
  })
})


module.exports = router;
