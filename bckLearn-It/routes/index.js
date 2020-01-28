var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { name: 'Jorge Eduardo', last: 'Salgado Romero', account:'0801-1998-02725' }
  );
});

module.exports = router;
