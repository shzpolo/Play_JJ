var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Play_JJ' });
});

router.get('/single', function(req, res, next) {
    res.render('single');
});

router.get('/match', function(req, res, next) {
    res.render('match');
});

module.exports = router;
