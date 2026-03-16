var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Roupas', { title: 'Roupas' });
});

router.get('/vestidos', function(req, res, next) {
  res.render('vestidos', { title: 'Vestidos' });
});

router.get('/calcas', function(req, res, next) {
  res.render('calcas', { title: 'Calça' });
});

router.get('/camisetas', function(req, res, next) {
  res.render('camisetas', { title: 'Camisetas' });
});

module.exports = router;
