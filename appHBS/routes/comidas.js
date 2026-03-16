var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('comidas', { title: 'Comidas' });
});

router.get('/hotdog', function(req, res, next) {
  res.render('hotdog', { title: 'Hot Dog' });
});

router.get('/pizza', function(req, res, next) {
  res.render('pizza', { title: 'Pizza' });
});

router.get('/hamburguer', function(req, res, next) {
  res.render('hamburguer', { title: 'Hambúrguer' });
});

module.exports = router;