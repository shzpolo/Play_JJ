/**
 * Created by shzpo_000 on 2017/11/20.
 */
var express = require('express');
var router = express.Router();
var player = 0;
var fieldList = [];
var atkList = [];

router.get('/', function(req, res) {
    res.render('match', {player: req.query['player'], enemy: req.query['enemy']});
});

router.get('/pre', function(req, res) {
    res.render('prematch', { player: player });
    player ++;
    var rows = new Array(12);
    for(var i=0; i<12; i++) {
        rows[i] = new Array(12);
        for(var j=0; j<12; j++) {
            rows[i][j] = 0;
        }
    }
    fieldList.push(rows);
});

router.get('/init', function(req, res) {
    var player = parseInt(req.query['player']);
    var field = fieldList[player];
    var body = req.query['body'];

    console.log(player + ' init received.');

    for(var i=0; i<req.query['head'].length; i++) {
        field[req.query['head'][i]['row']][req.query['head'][i]['col']] = 1;
    }
    for(var j in body) {
        field[body[j]['row']][body[j]['col']] = 2;
    }
    console.log(field);
    res.send({ state: 'OK' });
});

router.get('/atk', function(req, res) {
    var enemy = parseInt(req.param['enemy']);
    var field = fieldList[player];
    for(var i=0; i<req.param.head.length; i++) {
        field[req.param.head[i].row][req.param.head[i].col] = 1;
    }
    for(i=0; i<req.param.body.length; i++) {
        field[req.param.body[i].row][req.param.body[i].col] = 2;
    }
    res.send({ State: 'OK' });
});

router.get('/exit', function(req, res, next) {
    res.send({ Out: 'OK' });
    player --;
    fieldList.pop();
});

module.exports = router;
