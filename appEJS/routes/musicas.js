var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('musicas', { title: 'Músicas' });
});

router.get('/mpb', function(req, res, next) {
  res.render('mpb', { title: 'MPB' });
});

router.get('/funk', function(req, res, next) {
  res.render('funk', { title: 'Funk' });
});

router.get('/rock', function(req, res, next) {
  res.render('rock', { title: 'Rock' });
});

router.get('/sertanejo', function(req, res, next) {
  res.render('sertanejo', { title: 'Sertanejo' });
});

module.exports = router;
