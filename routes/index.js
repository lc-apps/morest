var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Multi Ofertas',
                        subtitle: 'Um caminhão de ofertas'});
});

module.exports = router;
