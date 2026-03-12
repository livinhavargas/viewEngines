var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('musicas', { title: 'Músicas' });
});

router.get('/mpb', function(req, res, next) {
  res.render('mpb', { title: 'MPB' });
});

module.exports = router;
