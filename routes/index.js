var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Play_JJ' });
});

router.get('/single', function(req, res, next) {
    res.render('single');
});

router.get('/s', function(req, res, next) {
    console.log('sssss');
});

module.exports = router;
